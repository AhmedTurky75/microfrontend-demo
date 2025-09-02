import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureGuard implements CanActivate {
  private isEnabled = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) { }

  async canActivate(
  ): Promise<boolean> {
    // If we've already prompted, return the current access state
    if (!this.isEnabled.value) {
      this.router.navigate(['/']);
      console.log('Access to feature is denied by FeatureGuard in mfe-one.');
      return false;
    }
    return true;
  }

  // Method to toggle the guard at runtime
  setEnabled(enabled: boolean): void {
    this.isEnabled.next(enabled);
  }

  // Get the current state
  get isFeatureEnabled(): boolean {
    return this.isEnabled.value;
  }
}
