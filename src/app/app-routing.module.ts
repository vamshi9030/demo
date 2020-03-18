import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CoursesComponent } from './courses/courses.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
{ path:'', component:HomeComponent },
      { path:'home', component:HomeComponent },
	{path:'about',component:AboutComponent},
	{path:'teacher',component:TeacherComponent},
	{path:'courses',component:CoursesComponent},
	{path:'pricing',component:PricingComponent},
	{path:'blog',component:BlogComponent},
	{path:'contact',component:ContactComponent},
	{path:'',redirectTo:'/home',pathMatch:'prefix'},
	{ path:'**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AboutComponent,
    TeacherComponent,
    CoursesComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    PagenotfoundComponent],
declarations: [
    
    AboutComponent,
    TeacherComponent,
    CoursesComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
})
export class AppRoutingModule { }
