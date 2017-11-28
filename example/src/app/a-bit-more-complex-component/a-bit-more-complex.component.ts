import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-bit-more-complex',
  template: `
    <div class="kek">
      diary works!
      <div *ngIf="someVar" class="inner-class">
        <div *ngIf="anotherVar" class="inner-hidden"></div>
        <div>another case</div>
      </div>
      <div>one more case case</div>
      <div><app-child-component kek="someVar"></app-child-component></div>
    </div>
  `,
  styles: [
    `.kek { color: red }`
  ]
})
export class ABitMoreComplexComponent implements OnInit {
  someVar = true;
  anotherVar = false;

  constructor() {}

  ngOnInit() {}
}
