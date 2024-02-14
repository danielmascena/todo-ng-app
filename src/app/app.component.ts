  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterOutlet } from '@angular/router';
  import { ListComponent } from './list.component';
  import { HeaderComponent } from './header.component';
  import {FooterComponent} from "./footer.component";


  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ListComponent, HeaderComponent, FooterComponent],
    template: `
    <section class="todoapp">
      <app-header></app-header>
      <app-list></app-list>
      <app-footer></app-footer>
    </section>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'todo-app';
}
