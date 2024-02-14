import {signal, inject, Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Todo} from "./todo";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      @if (todoLen()) {
        <span class="todo-count">
          <strong>{{todoLen()}}</strong>
          {{todoLen() > 1 ? "items" : "item"}} left
        </span>
        <ul class="filters">
        </ul>
      }
    </footer>
  `,
  styles: ``
})
export class FooterComponent implements OnInit {
  todoService: TodoService = inject(TodoService);
  todoLen = signal(0);

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos: Todo[]) => this.todoLen.set(todos.length));
  }
}
