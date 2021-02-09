import { UserEffects } from './user.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { userFeatureKey, reducer } from './user.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(userFeatureKey, reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserStoreModule { }
