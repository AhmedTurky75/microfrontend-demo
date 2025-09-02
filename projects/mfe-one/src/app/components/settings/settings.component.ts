import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-settings',
    standalone: false,
    template: `
    <div class="settings">
      <h2>Settings Component</h2>
      <p>This is the settings component in the feature module</p>
      <div class="setting-option">
        <label>
          <input type="checkbox" [(ngModel)]="notifications" (change)="onSettingChange('notifications', $event)">
          Enable Notifications
        </label>
      </div>
    </div>
  `,
    styles: [`
    .settings {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 1rem 0;
      background-color: #f8f9fa;
    }
    .setting-option {
      margin: 1rem 0;
      padding: 0.5rem;
      background: white;
      border-radius: 4px;
    }
  `]
})
export class SettingsComponent {
    notifications = false;

    onSettingChange(setting: string, event: Event): void {
        const target = event.target as HTMLInputElement;
        console.log(`${setting} setting changed to:`, target.checked);
    }
}
