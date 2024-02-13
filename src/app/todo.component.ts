import {inject, Component, Input} from '@angular/core';
import {Todo} from "./todo";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
    <div class="view">
      <input type="checkbox" class="toggle" (click)="toggle()" />
      <label>{{todo.title}}</label>
      <button class="destroy" (click)="remove()"></button>
    </div>
  `,
  styles: ``
})
export class TodoComponent {
  @Input() todo!: Todo;
  todoService = inject(TodoService);

  remove() {
    this.todoService.deleteTodo((this.todo.id));
  }

  toggle() {
    this.todoService.updateTodo({
      ...this.todo,
      isCompleted: !this.todo.isCompleted
    });
  }
}
