import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-input-decotor',
  templateUrl: './test-input-decotor.component.html',
  //styleUrls: ['./test-input-decotor.component.less']
})
export class TestInputDecotorComponent implements OnInit {

  @Input()
  dropdownItems: string[] = [];

  @Output() selectedItemOutput = new EventEmitter<number>();

  selectedItem: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.dropdownItems);
    this.selectedItem = this.dropdownItems[0];
    const dropdownButton = this.el.nativeElement.querySelector('.dropdown-button');
    dropdownButton.classList.remove('dropdown-button');
    dropdownButton.classList.add('dropdown-input-button');
  }

  selectBox(id: number) {
    this.selectedItemOutput.emit(id);
  }

}
