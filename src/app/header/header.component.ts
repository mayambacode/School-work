import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = "Mayamba";
  campus = "Trafalgar";
  login = "bokambma";
  id = "991578659";


  constructor() { }

  ngOnInit(): void {
  }

}
