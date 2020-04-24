import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../shared/services/login.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-password-form',
    templateUrl: './password-form.component.html',
})
export class PasswordFormComponent implements OnInit {
    @Output() changeTab = new EventEmitter();

    form: FormGroup;
    submitError: boolean;
    submitSuccess: boolean;

    constructor(
        public fb: FormBuilder,
        private loginService: LoginService) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        if (this.form) { return; }

        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    sendPasswordRecovery() {
        this.submitError = this.submitSuccess = false;
        if (!this.form.value.email || !this.form.get('email').valid) {
            this.submitError = true;
        } else {
            this.loginService.sendPasswordRecovery(this.form.value.email)
                .pipe(
                    finalize(() => this.submitSuccess = true)
                ).subscribe();
        }
    }

    backToLogin() {
        this.changeTab.emit('login');
    }
}
