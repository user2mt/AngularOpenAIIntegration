import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.less']
})
export class PipeDemoComponent implements OnInit {

  data = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
    { id: 3, name: 'Item 3', description: 'This is item 3' },
    { id: 4, name: 'Item 4', description: 'This is item 4' },
    { id: 5, name: 'Item 5', description: 'This is item 5' },
  ];
  searchTerm: string = '';


  constructor() { }

  ngOnInit(): void {
  }


  addItem() {
    var len = this.data.length + 1;
    const tempData = {
      id: len,
      name: 'Item ' + len,
      description: 'This is item ' + len
    };
    this.data.push(
      tempData
    );
  }

  editItem() {
    // code to edit existing item
  }

  deleteItem() {
    // code to delete existing item
  }

}




