import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  shoppingItem;
  shoppingList;

  

  constructor() { 
    this.shoppingList = ["eggs", "milks", "bread"];
    this.shoppingItem = "";
  }

  addItem = () => {
    if(this.shoppingList.push(this.shoppingItem)) {
      console.log(this.shoppingList);
     this.shoppingItem = "";
    } 
    
  }

  clearList = () => {
      if (this.shoppingList) {
          this.shoppingList = [];
          console.log(this.shoppingList);
      }
  }

  changeColor() {
    if (this.shoppingList.length >  3){
      return "red";
    } else {
      return "black";
    }
  }

  ngOnInit(): void {
  }

}
