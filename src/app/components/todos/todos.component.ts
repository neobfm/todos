import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

   todos: Todo[];

   inputTodo: string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos  = [
       {
         content: 'first todo',
         completed: true
       },
       {
        content: 'Second todo',
        completed: false
      }
    ];
  }

  // tslint:disable-next-line: typedef
  toggleDone(id: number) {
     this.todos.map((v, i) => {
       // tslint:disable-next-line: triple-equals
       if (i == id ) { v.completed = !v.completed; }

       return v;
     });
  }

  // tslint:disable-next-line: typedef
  deleteTod(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id );
  }

  // tslint:disable-next-line: typedef
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = '';
  }

}
