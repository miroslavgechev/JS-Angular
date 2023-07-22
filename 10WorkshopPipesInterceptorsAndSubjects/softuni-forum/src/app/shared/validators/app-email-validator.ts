import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  const domainStrings = domains.join('|');
  const EMAIL_REGEX = new RegExp(
    `[^@]{6,}@gmail\.(${domainStrings})$`
  );

  return (control) => {
    return control.value === '' || EMAIL_REGEX.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
