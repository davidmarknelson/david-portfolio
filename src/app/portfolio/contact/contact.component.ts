import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  error: string;
  success: string;
  sending: boolean;

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.success = '';
    this.error = '';
    this.sending = true;
    const contactInfo = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.contactService.sendMessage(contactInfo).subscribe(res => {
      this.contactForm.reset();
      this.success = res.message;
      this.sending = false;
    }, err => {
      this.error = err.error.message || 'There was an error. Please try again later.';
      this.sending = false;
    })
  }

  deleteNotification() {
    this.success = '';
    this.error = '';
  }
}
