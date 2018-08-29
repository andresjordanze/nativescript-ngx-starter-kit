import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CodeScannerComponent } from "./codeScanner.component";

const routes: Routes = [
    { path: "", component: CodeScannerComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class CodeScannerRoutingModule { }
