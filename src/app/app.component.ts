import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-App';
  success_msg = true;
  superPower='superMan';
  tax=10;
  category='clothing';
  styleProp="purple";
  txtColor="red";
  contacts = [
    { firstName: 'S', lastName: 'R', contactId: 1 },
    { firstName: 'K', lastName: 'R', contactId: 2 },
    { firstName: 'R', lastName: 'R', contactId: 3 },
    { firstName: 'P', lastName: 'R', contactId: 4 },
    { firstName: 'Q', lastName: 'R', contactId: 5 },
    { firstName: 'R', lastName: 'R', contactId: 6 },
    { firstName: 'M', lastName: 'R', contactId: 7 },
    { firstName: 'K', lastName: 'R', contactId: 8 },
    { firstName: 'R', lastName: 'R', contactId: 9 }
  ];
}
