import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = "";
  @Input() isToggleActive: boolean = false;
  @Input() width: string = "70px";
  @Input() disabled: boolean = false;
  @Input() height: string = "50px";
  @Input() type: string = "button";
  @Input() id: string | null = null;
  @Output() handleButtonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

}
