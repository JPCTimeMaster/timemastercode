import { Injectable } from "@angular/core";
import { Category } from "./category.model";
import { Todo } from "./todo.model";


@Injectable({
    providedIn: 'root',
})

export class CategoryService {

    category: Category[]= [
        new Category(
            'Uni',
            [new Todo("SD", 1), new Todo("SD", 1), new Todo("SD", 1), new Todo("SD", 1)]
        ),
        new Category(
            'Uni',
            [new Todo("RT1", 1)]
        ),
        new Category(
            'Uni',
            [new Todo("RT2", 1)]
        ),
    ];

  
    onDeleteCategory(id: number) {   
      this.category.splice(id, 1);
    }

    onDeleteTodo(id_1: number, id_2: number) {   
        console.log(this.category[id_1].to_dos[id_2]);
        this.category[id_1].to_dos.splice(id_2, 1);
      }

    getCategoryById(id: number){
        return this.category[id];
    }

    getCategories(){
        return this.category;
    }

  }