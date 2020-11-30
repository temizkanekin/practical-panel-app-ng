import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() buttonStatesArray: any = [];
  @Output() notifyClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() notifyReset: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  handleButtonClick($event:any, rowIndex: number, columnIndex: number, isToggleActive?: boolean | undefined) {
    this.notifyClick.emit({ rowIndex, columnIndex })
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
