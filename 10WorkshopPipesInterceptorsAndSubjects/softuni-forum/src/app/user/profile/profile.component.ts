import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { UserService } from '../user.service';

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
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;

  profileDetails: Profile = {
    username: '',
    email: '',
    telExt: '00359',
    tel: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    telExt: [''],
    tel: [''],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;

    this.profileDetails = {
      username,
      email,
      telExt: '00359',
      tel,
    };

    this.form.setValue({
      username,
      email,
      telExt: '00359',
      tel,
    });
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = { ...this.form.value } as Profile;
    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username!, email!, tel!).subscribe(() => {
      this.toggleEditMode();
    });
  }
}
