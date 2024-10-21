import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule,MatButtonModule,MatInputModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  successMessage: string = '';
  errorMessage: string = '';

  submitForm(event: Event) {
    event.preventDefault(); // Prevent page reload

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/mjkvkynv', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          this.successMessage = 'Message sent successfully!';
          form.reset(); // Clear the form
        } else {
          this.errorMessage = 'Oops! Something went wrong.';
        }
      })
      .catch(() => {
        this.errorMessage = 'Network error. Please try again.';
      });
  }

}
