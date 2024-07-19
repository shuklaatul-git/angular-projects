import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  template: `
    <div>
      <h2>Pop-up Window</h2>
      <p>Parameter 1: {{ param1 }}</p>
      <p>Parameter 2: {{ param2 }}</p>
    </div>
  `
})
export class ModalComponent implements OnInit {
  param1: string | null = null;
  param2: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.param1 = params['param1'];
      this.param2 = params['param2'];
    });
  }
}
