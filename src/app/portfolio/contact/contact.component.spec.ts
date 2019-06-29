import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactService } from '../../services/contact.service';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';


class MockContactService {
  sendMessage() {};
}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactService: ContactService;

  let fillForm = () => {
    component.contactForm.controls['name'].setValue('John Doe');
    component.contactForm.controls['email'].setValue('test@example.com');
    component.contactForm.controls['message'].setValue('Hello, World!');
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{ provide: ContactService, useClass: MockContactService }]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactComponent);
    contactService = fixture.debugElement.injector.get(ContactService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('contact icons', () => {
    it('should open link in a new window when clicked', () => {
      const icons = fixture.debugElement.queryAll(By.css('.contact-icons'));
      for (let icon of icons) {
        expect(icon.attributes.target).toEqual('_blank');
      }
    });
  });

  describe('contact form', () => {
    it('should be invalid when empty', () => {
      expect(component.contactForm.valid).toBeFalsy();
    });

    it('should be invalid with an email without @', () => {
      let email = component.contactForm.controls['email'];
      email.setValue("test");
      let errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['email']).toBeTruthy();
    });

    it('should be invalid with an email without text after @', () => {
      let email = component.contactForm.controls['email'];
      email.setValue("test@");
      let errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['email']).toBeTruthy();
    });

    it('should be valid with a regular email', () => {
      let email = component.contactForm.controls['email'];
      email.setValue("test@example.com");
      let errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['email']).toBeFalsy();
    });

    it('should be valid with proper info', () => {
      expect(component.contactForm.valid).toBeFalsy();
      fillForm();
      expect(component.contactForm.valid).toBeTruthy();
    });

    it('should have a disabled button if form is invalid', () => {
      expect(component.contactForm.valid).toBeFalsy();
      const submitButton = fixture.debugElement.query(By.css('[data-test=submit-button]'));
      expect(submitButton.properties.disabled).toEqual(true);
    });

    it('should reset the form after the message has been sent', () => {
      spyOn(component, 'onSubmit').and.callFake(() => {
        component.contactForm.controls['name'].setValue('');
        component.contactForm.controls['email'].setValue('');
        component.contactForm.controls['message'].setValue('');
      });

      fillForm();
      fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
      fixture.detectChanges();
      
      expect(component.contactForm.controls['name'].value).toEqual('');
      expect(component.contactForm.controls['email'].value).toEqual('');
      expect(component.contactForm.controls['message'].value).toEqual('');
    });

    it('should not reset the form if there is an error', () => {
      spyOn(contactService, 'sendMessage').and.callFake(() => {
        return throwError({ error: { message: '' } });
      });

      fillForm();
      fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
      fixture.detectChanges();
      
      expect(component.contactForm.controls['name'].value).toEqual('John Doe');
      expect(component.contactForm.controls['email'].value).toEqual('test@example.com');
      expect(component.contactForm.controls['message'].value).toEqual('Hello, World!');
    });

    it('should show a success notification message when the form successfully submits', () => {
      spyOn(contactService, 'sendMessage').and.callFake(() => {
        return of({message: 'Your message has successfully been sent!'});
      });

      fillForm();
      fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
      fixture.detectChanges();

      const successNotification: DebugElement = fixture.debugElement.query(By.css('.success-notification'));
      const errorNotification: DebugElement = fixture.debugElement.query(By.css('.error-notification'));
      // There is a space before and after the toEqual message because the enter white space in the HTML are 
      // counted as spaces for some reason.
      expect(successNotification.nativeElement.textContent).toEqual(' Your message has successfully been sent! ');
      expect(errorNotification).toBeFalsy();
    });

    it('should show an error notification message when the form unsuccessfully submits', () => {
      spyOn(contactService, 'sendMessage').and.callFake(() => {
        return throwError({ 
          error: { 
            message: 'There was an error sending your message. Please try again later.'
          } 
        });
      });

      fillForm();
      fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
      fixture.detectChanges();

      const successNotification: DebugElement = fixture.debugElement.query(By.css('.success-notification'));
      const errorNotification: DebugElement = fixture.debugElement.query(By.css('.error-notification'));
      // The spacing in the toEqual is the same as the success test
      expect(errorNotification.nativeElement.textContent).toEqual(' There was an error sending your message. Please try again later. ');
      expect(successNotification).toBeFalsy();
    });
  });
});
