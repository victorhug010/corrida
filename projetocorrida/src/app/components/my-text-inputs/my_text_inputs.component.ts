import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-text-inputs',
  templateUrl: './my_text_inputs.component.html',
  styleUrls: ['./my_text_inputs.component.scss']
})
export class MyTextInputsComponent {
  value: string='';
  @Input('password')
  isPassword=true;
  
}