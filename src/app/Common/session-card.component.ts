import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'session-card',
    templateUrl: 'session-card.component.html',
    styles:[`.card{cursor:pointer}`]
})

export class SessionCardComponent implements OnInit {
    visible:boolean = true;
    constructor() { }

    ngOnInit() { }
    toogleContent(){
        this.visible = !this.visible;
    }
}