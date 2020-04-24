import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserProfilePage } from './pages/user-profile/user-profile.page';

const routes: Routes = [
    { path: '', component: UserProfilePage},
];

@NgModule({
    declarations: [
        UserProfilePage
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class UserProfileModule { }
