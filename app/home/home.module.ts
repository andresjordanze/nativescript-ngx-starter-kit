import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
