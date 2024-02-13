import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  template: `
    <header class="header">
      <h1>Todos</h1>
      <input placeholder="What needs to be done?" autofocus [(ngModel)]="title" class="new-todo" (keyup.enter)="addTodo()" />
    </header>
  `,
  styles: ``
})
export class HeaderComponent {
  todoService = inject(TodoService);
  title = '';

  addTodo() {
    this.todoService.addTodo(this.title);
    this.title = '';
  }

}
