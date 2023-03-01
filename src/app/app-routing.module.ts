import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'statictable', pathMatch:'full'},
  { path: 'statictable', loadChildren: () => import('./static-table/static-table.module').then(m => m.StaticTableModule)},
];


const rootRouting = RouterModule.forRoot([
], { useHash: false });

@NgModule({
  imports: [RouterModule.forRoot(routes),rootRouting],
  exports: [RouterModule]
})
export class AppRoutingModule { }
