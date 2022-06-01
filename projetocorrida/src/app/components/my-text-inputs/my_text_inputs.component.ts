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
  enterEvent: any;
  valueChanged: any;
  

  pressEnter() {
    this.enterEvent.emit();
  }

  @Input()
  placeholder: String = '';

  @Input('type')
  inputType: String = 'text';

  _textoDigitado: String = '';

  @Input('value')
  set textoDigitado(newValue: String) {
    this._textoDigitado = newValue;
    this.valueChanged.emit(this._textoDigitado);
  }
}
