import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureAccessGuard implements CanActivate {
  private isEnabled = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (!this.isEnabled.value) {
      this.router.navigate(['/']);
      console.log('Access to feature is denied by FeatureAccessGuard in the host app.');
      return false;
    }
    return true;
  }

  setEnabled(enabled: boolean): void {
    this.isEnabled.next(enabled);
  }

  get isFeatureEnabled(): boolean {
    return this.isEnabled.value;
  }
}
