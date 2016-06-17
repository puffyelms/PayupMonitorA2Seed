import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-controls-input',
  templateUrl: 'controls-input.component.html',
  styleUrls: ['controls-input.component.css']
})
export class ControlsInputComponent implements OnChanges {
  @Input() dropdownLabel: string;
  @Input() dropdownList: string[];
  @Input() dropdownSelected: string;
  @Input() dropdownDisabled: boolean;
  @Input() dropdownWidth: string;

  // @Output() somethingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    console.log("ngOnChanges event in it")
  }


}
