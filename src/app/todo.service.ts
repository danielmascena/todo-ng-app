import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos$ = new BehaviorSubject<Todo[]>([]);
  id = 1;

  constructor() { }

  getTodos(): BehaviorSubject<Todo[]> {
    return this.todos$;
  }

  addTodo(title: string) {
    const todo = {
      title,
      id: this.id++,
      isCompleted: false
    };
    console.log(todo);
    this.todos$.next([...this.todos$.getValue(), todo]);
  }

  deleteTodo(id: number) {
    const newList = (this.todos$.getValue() ?? []).filter(todo => todo.id !== id);
    this.todos$.next(newList);
  }

  updateTodo(newState: Todo) {
    this.deleteTodo(newState.id);
    this.todos$.next([...this.todos$.getValue(), newState]);
  }

  getLength() {
    return this.todos$.getValue().length;
  }
}
