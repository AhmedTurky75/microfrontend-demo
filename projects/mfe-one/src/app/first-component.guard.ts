import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirstComponentGuard implements CanActivate {
    private hasAccess = new BehaviorSubject<boolean>(true);

    constructor(private router: Router) { }

    async canActivate(): Promise<boolean> {
        if (!this.hasAccess.value) {
            this.router.navigate(['/']);
            console.log('Access to First Component is denied by FirstComponentGuard');
            return false;
        }
        return true;
    }

    setAccess(granted: boolean): void {
        this.hasAccess.next(granted);
    }

    get hasAccessToFirstComponent(): boolean {
        return this.hasAccess.value;
    }
}
