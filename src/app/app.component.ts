import { Component } from '@angular/core';

const rowCount = 4
const columnCount = 4
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonStatesArray: boolean[][] = []
  setInitialButtonStatesArray() {
    this.buttonStatesArray = []
    for (let i = 0; i < rowCount; i++)
      this.buttonStatesArray.push(new Array(columnCount).fill(false))
  }
  handleReset() {
    this.setInitialButtonStatesArray()
  }
  handleButtonClick($event: any) {
    // console.log($event)
    this.buttonStatesArray[$event.rowIndex][$event.columnIndex] = typeof $event.isToggleActive === 'undefined' ? !this.buttonStatesArray[$event.rowIndex][$event.columnIndex] : $event.isToggleActive
  }

  ngOnInit(): void {
    this.setInitialButtonStatesArray()
  }
}
