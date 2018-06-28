
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';




import { FatherComponent } from '../family/father/father.component';
import { MotherComponent } from '../family/mother/mother.component';
import { DaughterComponent } from '../family/daughter/daughter.component';
import { SonComponent } from '../family/son/son.component';
import { TodoComponent } from '../day2/todo/todo.component';
import { TemplateformComponent } from '../forms/template/templateform/templateform.component';
import { ModelformComponent } from '../forms/template/modelform/modelform.component';
import { AutosearchComponent } from '../autosearch/autosearch.component';
import { ConsumeLocalServiceComponent } from '../consume/consume-local-service/consume-local-service.component';
import { ConsumeRemoteServiceComponent } from '../consume/consume-remote-service/consume-remote-service.component';
import { BasicanimationComponent } from '../animation/basicanimation/basicanimation.component';
import { ParentComponent } from '../parent-child/parent/parent.component';
import { ChildComponent } from '../parent-child/child/child.component';
import { FamilyComponent } from '../family/family/family.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { InbuiltdirectiveComponent } from '../directive/inbuiltdirective/inbuiltdirective.component';
import { UseDirectiveComponent } from '../customDirective/use-directive/use-directive.component';

export const myRoutes : Routes=[
  
  {
    path:'',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path:'family',
    component:FamilyComponent,
    children:[
      {path:'father',component:FatherComponent},
      {path:'mother', component:MotherComponent},
      {path:'daughter',component:DaughterComponent},
      {path:'son',component:SonComponent}
  ]},
  {
    path:'todo',
    component:TodoComponent
    },
    {
      path:'template',
      component:TemplateformComponent
    },
    {
      path:'modelform',
      component:ModelformComponent
    },
    {
      
        path:'autosearch',
        component:AutosearchComponent
      
    },
    {
      path:'localservice',
      component:ConsumeLocalServiceComponent
    },
    {
      path:'remoteservice',
      component:ConsumeRemoteServiceComponent
    },
    {
      path:'animation',
      component:BasicanimationComponent
    },
    {
      path:'eventbinding',
      component:ParentComponent
    },
    {
      path:'directive',
      component:InbuiltdirectiveComponent
    },
    {
      path:'customdirective',
      component:UseDirectiveComponent
    },
    {
      path:'**',
      component:NotFoundComponent
    }
    

]

export class AppRoutingModule { }
