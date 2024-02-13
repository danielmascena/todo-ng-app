import { inject, Component } from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo";
import {TodoComponent} from "./todo.component";
import {BehaviorSubject} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TodoComponent, AsyncPipe],
  template: `
    <main class="main">
      <ul class="todo-list">
        @for (todo of todos | async; track todo.id) {
          <li [class.completed]="todo.isCompleted">
            <app-todo [todo]="todo"></app-todo>
          </li>
        }
      </ul>
    </main>
  `,
  styles: ``
})
export class ListComponent {
  private todoService = inject(TodoService);
  todos: BehaviorSubject<Todo[]> = this.todoService.getTodos();
}
