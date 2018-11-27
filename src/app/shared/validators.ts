import { FormControl } from '@angular/forms';

export function TagsValidator(control: FormControl) {

  const value = control.value || '';

  const valid = value.match(/(\#[a-zA-Z]+\b)/);

  return valid ? null : { pattern : true};

}
