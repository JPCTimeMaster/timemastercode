import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { Todo } from "./todo.model";


@Component({
  selector: 'app-aufgabenfelder',
  templateUrl: './aufgabenfelder.component.html',
  styleUrls: []
})
export class AufgabenfelderComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.onAddCategory();
  }

  onAddCategory() {
    const newCategory = new Category('Neue Kategorie', []);
    this.categories.push(newCategory);
  }

  onDeleteCategory(id: number) {   
    this.categoryService.onDeleteCategory(id);
  }

  onEnter(i : number) {

  }

  onAddTodo(id: number) {
    const newTodo = new Todo('Neues To-Do', 0);
    this.categories[id].to_dos.push(newTodo);
}

onDeleteTodo(id_1: number, id_2: number){
  this.categoryService.onDeleteTodo(id_1, id_2);
}

}

     
