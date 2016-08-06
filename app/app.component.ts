import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title: string;
    todos: string[];

    constructor() {
        this.title = 'Список запланированных дел';
        this.todos = ['Проснуться в 6:00', 'Сделать зарядку', 'Принять душ', 'Приготовить завтрак', 'Собрать на работу'];
    }
}