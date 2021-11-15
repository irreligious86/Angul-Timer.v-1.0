import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-output-display',
  templateUrl: './output-display.component.html',
  styleUrls: ['./output-display.component.css']
})
export class OutputDisplayComponent implements OnInit {

  min(time:number = 0): string {
    return time.toString();
  }

  sec(time:number = 0): string {
    return time.toString();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
