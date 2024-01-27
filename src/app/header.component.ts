import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1>Todos</h1>
      <input class="new-todo" />
    </header>
  `,
  styles: ``
})
export class HeaderComponent {

}
