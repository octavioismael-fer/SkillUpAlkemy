import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceChartComponent } from './pages/balance/balance-chart/balance-chart.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlazoFijoComponent } from './pages/plazo-fijo/plazo-fijo.component';
import { UsuarioPerfilComponent } from './pages/usuario-perfil/usuario-perfil.component';

const routes: Routes = [

      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'perfil',
        component:UsuarioPerfilComponent
      },
      {
        path:'balance',
        component:BalanceChartComponent
      },
      {
        path:'contacts',
        component:ContactsComponent
      },
      {
        path:'plazos',
        component:PlazoFijoComponent
      }
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoRoutingModule { }
