import { Routes } from '@angular/router';
import { UsuarioAdminPlistRoutedComponent } from './component/usuario/usuario.admin.plist.routed/usuario.admin.plist.routed.component';
import { UsuarioAdminEditRoutedComponent } from './component/usuario/usuario.admin.edit.routed/usuario.admin.edit.routed.component';
import { SharedHomeRoutedComponent } from './component/shared/shared.home.routed/shared.home.routed.component';
import { UsuarioAdminViewRoutedComponent } from './component/usuario/usuario.admin.view.routed/usuario.admin.view.routed.component';
import { UsuarioAdminCreateRoutedComponent } from './component/usuario/usuario.admin.create.routed/usuario.admin.create.routed.component';
import { UsuarioAdminDeleteRoutedComponent } from './component/usuario/usuario.admin.delete.routed/usuario.admin.delete.component';
import { ApunteAdminDeleteRoutedComponent } from './component/apunte/apunte.admin.delete.routed/apunte.admin.delete.component';
import { ApunteAdminPlistRoutedComponent } from './component/apunte/apunte.admin.plist.routed/apunte.admin.plist.routed.component';
import { ApunteAdminEditRoutedComponent } from './component/apunte/apunte.admin.edit.routed/apunte.admin.edit.routed.component';
import { ApunteAdminViewRoutedComponent } from './component/apunte/apunte.admin.view.routed/apunte.admin.view.routed.component';
import { ApunteAdminCreateRoutedComponent } from './component/apunte/apunte.admin.create.routed/apunte.admin.create.routed.component';

import { PeriodoAdminPlistRoutedComponent } from './component/periodo/periodo.admin.plist.routed/periodo.admin.plist.routed.component';
import { PeriodoAdminEditRoutedComponent } from './component/periodo/periodo.admin.edit.routed/periodo.admin.edit.routed.component';
import { PeriodoAdminViewRoutedComponent } from './component/periodo/periodo.admin.view.routed/periodo.admin.view.routed.component';
import { PeriodoAdminCreateRoutedComponent } from './component/periodo/periodo.admin.create.routed/periodo.admin.create.routed.component';
import { PeriodoAdminDeleteRoutedComponent } from './component/periodo/periodo.admin.delete.routed/periodo.admin.delete.component';

export const routes: Routes = [
  { path: '', component: SharedHomeRoutedComponent },
  { path: 'home', component: SharedHomeRoutedComponent },
  { path: 'admin/usuario/plist', component: UsuarioAdminPlistRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioAdminEditRoutedComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioAdminViewRoutedComponent },
  { path: 'admin/usuario/create', component: UsuarioAdminCreateRoutedComponent, pathMatch: 'full' },
  { path: 'admin/usuario/delete/:id', component: UsuarioAdminDeleteRoutedComponent },

  { path: 'admin/apunte/plist', component: ApunteAdminPlistRoutedComponent },
  { path: 'admin/apunte/edit/:id', component: ApunteAdminEditRoutedComponent },
  { path: 'admin/apunte/view/:id', component: ApunteAdminViewRoutedComponent },
  { path: 'admin/apunte/create', component: ApunteAdminCreateRoutedComponent, pathMatch: 'full' },
  { path: 'admin/apunte/delete/:id', component: ApunteAdminDeleteRoutedComponent },

  { path: 'admin/periodo/plist', component: PeriodoAdminPlistRoutedComponent },
  { path: 'admin/periodo/edit/:id', component: PeriodoAdminEditRoutedComponent },
  { path: 'admin/periodo/view/:id', component: PeriodoAdminViewRoutedComponent },
  { path: 'admin/periodo/create', component: PeriodoAdminCreateRoutedComponent, pathMatch: 'full' },
  { path: 'admin/periodo/delete/:id', component: PeriodoAdminDeleteRoutedComponent },
];
