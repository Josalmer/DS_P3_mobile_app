import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../shared/services/login.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
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
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    login() {
        this.submitError = undefined;
        this.loginService.login(this.form.value.email, this.form.value.password).subscribe(
            _ => { },
            error => this.submitError = error.error.error
        );
    }

    createAccount() {
        this.changeTab.emit('createAccount');
    }

    forgotPassword() {
        this.changeTab.emit('forgotPassword');
    }
}
