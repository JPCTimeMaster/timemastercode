import { Todo } from "./todo.model";


export class Category{
    static debug = false;
    static attach_grid_demo = false;
    constructor(
        public category_name: string,
        public to_dos: Todo[],
    ){}
    
}