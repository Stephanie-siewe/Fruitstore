import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'addfruit',
    loadChildren: () => import('./addfruit/addfruit.module').then( m => m.AddfruitPageModule)
  },
  {
    path: 'fruit',
    loadChildren: () => import('./fruit/fruit.module').then( m => m.FruitPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'peach',
    loadChildren: () => import('./peach/peach.module').then( m => m.PeachPageModule)
  },
  // {
  //   path: 'test2',
  //   loadChildren: () => import('./test2/test2.module').then( m => m.Test2PageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
