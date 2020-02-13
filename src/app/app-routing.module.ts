import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCocoComponent } from './about-coco/about-coco.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: AboutCocoComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
