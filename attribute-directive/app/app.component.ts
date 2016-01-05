/**
 * Created by tomsonngassa on 12/27/15.
 */

import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HighlightDirective]
})

export class AppComponent { }
