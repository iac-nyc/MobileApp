import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishdetailPage } from './dishdetail';

@NgModule({
  declarations: [
    DishdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DishdetailPage),
  ],
  exports: [
    DishdetailPage
  ]
})
export class DishdetailPageModule {}
