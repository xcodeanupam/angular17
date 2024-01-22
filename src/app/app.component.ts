import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myresume';
  private router: Router = inject(Router)
}

// npm install tailwindcss postcss autoprefixer postcss-import
// npx tailwindcss init -p
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

/* src/styles.css */
// @import 'tailwindcss/base';
// @import 'tailwindcss/components';
// @import 'tailwindcss/utilities';

// npm run build:tailwind

// "styles": [
//   // ... other styles
//   "src/tailwind.css"
// ]




