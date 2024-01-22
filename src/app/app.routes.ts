import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./resume/resume.routes').then(m => m.routes) },
    { path: 'admin', loadChildren: () => import('./admin/list-resume/admin.routes').then(m => m.routes) },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error?reason=NavError' }
]































// { path: 'products', loadChildren: ()=> import('./products/products.routes').then(m => m.routes) },
// { path: 'error', component: ErrorComponent },
// { path: '**', redirectTo:'/error?reason=NavError' }