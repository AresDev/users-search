import { FeatureModule } from './feature/feature.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from './base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseModule,
    FeatureModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    BaseModule,
    FeatureModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
