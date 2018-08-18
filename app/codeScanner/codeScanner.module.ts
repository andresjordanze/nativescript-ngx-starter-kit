import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CodeScannerRoutingModule } from "./codeScanner.routing";
import { CodeScannerComponent } from "./codeScanner.component";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { registerElement } from "nativescript-angular/element-registry";
registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

export function createBarcodeScanner() {
    return new BarcodeScanner();
}

@NgModule({
    imports: [
        CodeScannerRoutingModule,
    ],
    declarations: [
        CodeScannerComponent
    ],
    providers: [
        { provide: BarcodeScanner, useFactory: (createBarcodeScanner) }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CodeScannerModule { }
