/**
 * Created by tomson.ngassa on 1/3/2016.
 */
/* FOR DOCS ... MUST MATCH ClickMeComponent template
 <button (click)="onClickMe()">Click me!</button>
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'click-me',
    template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
    clickMessage = '';

    onClickMe(){
        this.clickMessage ='You are my hero!';
    }
}
