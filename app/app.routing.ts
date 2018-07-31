import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, PreloadAllModules } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
