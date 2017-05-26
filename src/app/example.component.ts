import { Component } from '@angular/core';

@Component({
  selector: 'test-selector',
  templateUrl: './example.component.html',
  styleUrls: ['./app.component.scss']
})
export class TestComponent {
  public maria = {
    name: 'Maria Bojko',
    information: [
      {
        descript: "birthday",
        info: 'Nov 14'
      },
      {
        descript: "brothers name",
        info: "Jonny"
      },
      {
        descript: "Mothers name",
        info: "Rosa"
      }
    ]
  };
}
