import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../shared/services/login.service';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
    @Output() changeTab = new EventEmitter();

    form: FormGroup;
    submitError: string;

    constructor(
        public fb: FormBuilder,
        private loginService: LoginService
        ) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        if (this.form) { return; }

        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPass: ['', [Validators.required]]
        }, { validator: this.checkPasswords });
    }

    createAccount() {
        this.submitError = undefined;

        const newUserObject = {
            email: this.form.value.email,
            name: this.form.value.name,
            surname: this.form.value.surname,
            password: this.form.value.password
        };

        this.loginService.createAccount(newUserObject).pipe(
            switchMap(response => this.loginService.login(this.form.value.email, this.form.value.password))
        ).subscribe(
            _ => { },
            error => {
                this.submitError = '';
                if (error.error.email) {
                    this.submitError += 'El email indicado ya esta ocupado. ';
                }
            }
        );
    }

    backToLogin() {
        this.changeTab.emit('login');
    }

    checkPasswords(group: FormGroup) {
        const pass = group.get('password').value;
        const confirmPass = group.get('confirmPass').value;

        return pass === confirmPass ? null : { notSame: true };
    }
}
