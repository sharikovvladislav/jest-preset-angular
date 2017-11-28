import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <div class="kek">
      {{ kek }}
      <div>
        rly
        <p>complex</p>
        <div>component
          <div>oh my god!</div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `.kek { color: red }`
  ]
})
export class ChildComponent implements OnInit {
  @Input() kek = null;

  constructor() {}

  ngOnInit() {}
}
