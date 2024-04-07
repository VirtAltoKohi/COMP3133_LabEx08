import { Component } from "@angular/core";

@Component({
    selector: 'students',
    template: `
                <h2>{{ getTitle() }}</h2>
                <p>{{ getCurrentDate() }}</p>`
})

export class StudentComponent {
    title = "My list of Students";

    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        return Date();
    }
}