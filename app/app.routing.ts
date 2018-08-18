import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, PreloadAllModules } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/codeScanner", pathMatch: "full" },
    { path: "codeScanner", loadChildren: "./codeScanner/codeScanner.module#CodeScannerModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
