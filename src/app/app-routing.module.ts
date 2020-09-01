import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'lista',
        loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
