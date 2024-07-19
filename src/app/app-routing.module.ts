import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';  // Your modal component

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'modal', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
