import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges{

  @Input() data: any[];
  @Input() title: string;
  @Output() changed = new EventEmitter<any>();

  selected: string;

  constructor() { }

  selectItem(item) {
    this.changed.emit(item);
    this.selected = item;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue !== changes.data.previousValue) {
      this.selected = null;
      this.changed.emit();
    }
  }

}
