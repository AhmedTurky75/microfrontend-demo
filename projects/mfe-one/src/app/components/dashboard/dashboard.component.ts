import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    standalone: false,
    template: `
    <div class="dashboard">
      <h2>Dashboard Component</h2>
      <p>This is the dashboard component in the feature module</p>
    </div>
  `,
    styles: [`
    .dashboard {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 1rem 0;
      background-color: #f8f9fa;
    }
  `]
})
export class DashboardComponent { }
