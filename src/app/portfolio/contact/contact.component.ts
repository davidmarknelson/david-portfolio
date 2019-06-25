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

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.error = '';
    this.success = '';

    const contactInfo = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.contactService.sendMessage(contactInfo).subscribe(res => {
      this.contactForm.reset();
      this.success = res.message;
    }, err => {
      this.contactForm.reset();
      this.error = err.error.message;
    })
  }

  deleteNotification() {
    this.success = '';
    this.error = '';
  }
}
