import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home',pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'project', component:ProjectsComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'certificates', component:CertificatesComponent},
    {path: '**', redirectTo:'/home',pathMatch:'full'},
];
