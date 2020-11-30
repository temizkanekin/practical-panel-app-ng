import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manual-override',
  templateUrl: './manual-override.component.html',
  styleUrls: ['./manual-override.component.css']
})
export class ManualOverrideComponent implements OnInit {
  @Output() notifyClick: EventEmitter<any> = new EventEmitter<any>();

  coordinatesForm: FormGroup;

  constructor() {
    this.coordinatesForm = new FormGroup({
      coordinateX: new FormControl(null, [
        Validators.max(4),
        Validators.min(1),
        Validators.maxLength(1),
        Validators.required,
      ]),
      coordinateY: new FormControl(null, [
        Validators.max(4),
        Validators.min(1),
        Validators.maxLength(1),
        Validators.required,
      ]),
      coordinateToggle: new FormControl(null, [
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {
  }

  handleButtonClick($event: MouseEvent | undefined , rowIndex: number, columnIndex: number, isToggleActive: boolean | undefined) {
    this.notifyClick.emit({ event: $event, rowIndex: rowIndex, columnIndex: columnIndex, isToggleActive: isToggleActive })
  }
  onSubmit(values: any) {
    let coordinateToggle = values.coordinateToggle === "true"
    this.handleButtonClick(undefined, values.coordinateY - 1, values.coordinateX - 1, coordinateToggle)
  }

}
