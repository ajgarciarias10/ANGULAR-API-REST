import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ELBICHOComponent } from './views/elbicho/elbicho.component';
import { AppComponent } from './app.component';
import { MiservicioService } from './miservicio.service';
import { HttpClientModule } from "@angular/common/http";
import { TemplateFormComponent } from './template-form/template-form.component';



const  routes: Routes =[
  {path:'appcomponent',component : AppComponent},
  {path:'elbicho',component:ELBICHOComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ MiservicioService],
  declarations: [
    AppComponent,
    ELBICHOComponent,
    TemplateFormComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
