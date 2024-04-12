import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'reservation-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  defaultValues: DefaultValuesI = {
    name: '',
    email: '',
    time: '19:00',
    numberPeople: 2,
    date: new Date(),
  };
  formValues: DefaultValuesI = { ...this.defaultValues };

  onNameChange(newName: string) {
    this.formValues.name = newName;
  }

  onEmailChange(newEmail: string) {
    this.formValues.email = newEmail;
  }

  onTimeChange(newTime: string) {
    this.formValues.time = newTime;
  }

  onDateChange(newTime: Date) {
    this.formValues.date = newTime;
  }

  onSubmit() {
    this.formValues = { ...this.defaultValues };
  }
}

interface DefaultValuesI {
  name: string;
  email: string;
  time: string;
  date: Date;
  numberPeople: number;
}
