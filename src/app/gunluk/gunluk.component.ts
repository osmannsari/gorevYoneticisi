import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gunluk',
  templateUrl: './gunluk.component.html',
  styleUrls: ['./gunluk.component.css']
})
export class GunlukComponent implements OnInit {

  title='Yeni plan ekle';
  todos=[];
  today: number = Date.now();
  
  addTodo(NewTodoLabel){
   
    let newTodo={
      event:NewTodoLabel,
      done:false
    };
  
    this.todos.push(newTodo);
    
  
  }
  deleteTodo(todo){
    this.todos=this.todos.filter( t => t.event !== todo.event);
  
  }
  
  doneTodo(todo){
    if(todo.done == false)
    todo.done=true;
  else
  alert("Tamamlanan projeyi silebilirsiniz");
  }
  
  
  
  
  
  
    constructor() {
  
      
     }
  
    ngOnInit(): void {
    }
  
  }
  
