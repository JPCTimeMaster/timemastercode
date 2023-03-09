import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
  }

}

