import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { PageLayoutComponent } from './component/page-layout/page-layout.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SearchBarComponent,
    PageLayoutComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
