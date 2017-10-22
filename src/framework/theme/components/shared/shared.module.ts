
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    CommonModule,
    // TODO: probably we don't need FormsModule in SharedModule
    FormsModule,
    RouterModule,
  ],
})
export class NbSharedModule { }
