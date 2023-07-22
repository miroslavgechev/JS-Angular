import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordValue: string,
  rePasswordValue: string
): ValidatorFn {

    
  return (control) => {
    const group = control as FormGroup;
    const pass1 = group.get(passwordValue);
    const pass2 = group.get(rePasswordValue);

    return pass1?.value === pass2?.value ? null : { matchPasswordsValidator: true };
  };
}
