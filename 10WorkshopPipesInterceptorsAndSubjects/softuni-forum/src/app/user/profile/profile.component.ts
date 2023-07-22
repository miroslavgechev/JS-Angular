import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';

interface Profile {
  username: string;
  email: string;
  telExt: string;
  tel: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: Profile = {
    username: 'John',
    email: 'john.doe@gmail.com',
    telExt: '00359',
    tel: '888 888 888',
  };

  form = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(5)],
    ],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    telExt: [''],
    tel: [''],
  });

  constructor(private fb: FormBuilder) {}

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = { ...this.form.value } as Profile;

    this.toggleEditMode();
  }
}
