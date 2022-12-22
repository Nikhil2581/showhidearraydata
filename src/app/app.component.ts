import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

  name = 'Angular ' + VERSION.major;

  showFruit(fruit, index) {
    const el = <HTMLElement>document.querySelector('#' + fruit + index);
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }
}
