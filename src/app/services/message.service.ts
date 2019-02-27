import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(private snackBar: MatSnackBar) { }

    public success(message: string) {
        console.log(message);
        this.snackBar.open(message, undefined, {duration: 2000, panelClass: ['success-snackbar']});
    }

    public error(message: string) {
        console.error(message);
        this.snackBar.open(message, undefined, {duration: 3000, panelClass: ['error-snackbar']});
    }
}