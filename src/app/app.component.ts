import { Component } from '@angular/core';
import { TestComponent } from './example.component';
import {inputFieldComponent} from './inputFieldComponent';

@Component({                //Compoent is the combo of HTML template and a Componet class that controls the view.
  selector: 'app-root',     //Selector property tells angular to display the component in the custom tag in the index.html
  templateUrl: './app.component.html',   //template property defines a message which for angular interpolation binding expression
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Maria is creating an input field and dropdown';
}
