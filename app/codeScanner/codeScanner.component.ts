import { Component, Inject } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import * as utils from "utils/utils";

@Component({
    moduleId: module.id,
    selector: "code-scanner",
    templateUrl: "./codeScanner.component.html"
})
export class CodeScannerComponent {
    constructor(private barcodeScanner: BarcodeScanner) {
    }
    public onScanResult(evt) {
        console.log(evt);
        console.log(`onScanResult: ${evt.text} (${evt.format})`);
    }

    public scanTapped(): void {
        let scan = () => {
            this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13",
                beepOnScan: true,
                cancelLabel: "Exit",
                showTorchButton: true,
                cancelLabelBackgroundColor: "#333333",
                openSettingsIfPermissionWasPreviouslyDenied: true,
                preferFrontCamera: false
            })
                .then((result) => {
                    utils.openUrl(result.text);
                })
                .catch(error => console.log(error));
        };
        this.barcodeScanner.hasCameraPermission()
            .then(granted => granted ? scan() : console.log("Permission denied"))
            .catch(() => {
                this.barcodeScanner.requestCameraPermission()
                    .then(() => scan());
            });
    }
}