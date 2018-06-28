import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { SonComponent } from './family/son/son.component';
import { TodoComponent } from './day2/todo/todo.component';
import { SortPipePipe } from './mypipes/sort-pipe.pipe';
import { TemplateformComponent } from './forms/template/templateform/templateform.component';
import { ModelformComponent } from './forms/template/modelform/modelform.component';
import { AutosearchComponent } from './autosearch/autosearch.component';
import { SearchFilterPipe } from './mypipes/search-filter.pipe';
import { ConsumeLocalServiceComponent } from './consume/consume-local-service/consume-local-service.component';
import { LocalserviceService } from './myservices/localservice.service';
import { ConsumeRemoteServiceComponent } from './consume/consume-remote-service/consume-remote-service.component';
import { RemoteserviceService } from './myservices/remoteservice.service';
import { BasicanimationComponent } from './animation/basicanimation/basicanimation.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { FamilyComponent } from './family/family/family.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InbuiltdirectiveComponent } from './directive/inbuiltdirective/inbuiltdirective.component';
import { SetbgDirective } from './customDirective/setbg.directive';
import { UseDirectiveComponent } from './customDirective/use-directive/use-directive.component';
import { CrudoperationsComponent } from './crud/crudoperations/crudoperations.component';
import { ProductComponent } from './crud/product/product.component';
import { UpdateComponent } from './crud/update/update.component';

const myRoutes : Routes=[
  
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
      path:'crudoperations',
      component:CrudoperationsComponent
    },
    {
      path:'product',
      component:ProductComponent
    },
    {
      path:'update/:id',
      component:UpdateComponent
    },
    {
      path:'**',
      component:NotFoundComponent
    }
    

]

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    DaughterComponent,
    SonComponent,
    TodoComponent,
    SortPipePipe,
    TemplateformComponent,
    ModelformComponent,
    AutosearchComponent,
    SearchFilterPipe,
    ConsumeLocalServiceComponent,
    ConsumeRemoteServiceComponent,
    BasicanimationComponent,
    ParentComponent,
    ChildComponent,
    FamilyComponent,
    NotFoundComponent,
    InbuiltdirectiveComponent,
    SetbgDirective,
    UseDirectiveComponent,
    CrudoperationsComponent,
    ProductComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [LocalserviceService,RemoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
