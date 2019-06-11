import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(private snackBar: MatSnackBar) { }

    public success(message: string) {
        console.log(message);
        this.snackBar.open(message, undefined, { duration: 2000, panelClass: ['success-snackbar'] });
    }

    public error(error: any) {
        let message: string;
        if (error.error != null) {
            // client-side error
            message = `${error.error.title}`;
        } else {
            // server-side error
            message = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        console.error(message);
        this.snackBar.open(message, undefined, { duration: 3000, panelClass: ['error-snackbar'] });

        return throwError(error);
    }
}