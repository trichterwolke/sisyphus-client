import { Subject } from 'rxjs';

export class SidenavService {
    private isOpen$: Subject<boolean>;
    public isOpen: boolean = true;
    public mode: string;

    constructor() {
        this.isOpen$ = new Subject<boolean>();
    }

    /** If menu is open, let close it */
    public close() {
        if (this.isOpen && this.mode != 'side') {
            this.isOpen = false;
            this.isOpen$.next(false);
        }
    }

    /** If menu is close, let open it */
    public open() {
        if (!this.isOpen) {
            this.isOpen = true;
            this.isOpen$.next(true);
        }
    }

    public toggle() {
        this.isOpen = !this.isOpen;
        this.isOpen$.next(!this.isOpen);
    }

    public asObservable() {
        return this.isOpen$.asObservable();
    }
}