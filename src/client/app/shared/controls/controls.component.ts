import { Component} from '@angular/core';
import { ControlsInputComponent } from '../controls-input/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-controls',
  templateUrl: 'controls.component.html',
  styleUrls: ['controls.component.css'],
  directives: [ ControlsInputComponent ]
})
export class ControlsComponent {
  selectedFirst:string = "30";
  selectedFirstList:string[] = ['10','20','30'];



}
