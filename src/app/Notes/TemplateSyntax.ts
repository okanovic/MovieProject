import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: `
        <h2>{{user.name}}</h2> //Interpolation
        <img [src]="imgUrl" /> // Property Binding
        <button (click)="doSomething()"></button> buradaki "(click)" event binding, "doSomething()" statement
    `
})

export class TemplateSyntax implements OnInit {
    user = { name: "Okan", surname: "Toper" }
    constructor() { }

    ngOnInit() { }

    doSomething() {

    }
}