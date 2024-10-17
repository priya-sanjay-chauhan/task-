import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',
    component:HomeComponent
  },
  {path:'home',
    component:HomeComponent,
   
  },
  {path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {path:'contact',
    component:ContactComponent
  },
  {path:'about',
    component:AboutComponent
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
