import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactService } from './contact.service';
import { of } from 'rxjs';

describe('ContactService', () => {
  let http: HttpTestingController;
  let contactService: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });
    http = TestBed.get(HttpTestingController);
    contactService = TestBed.get(ContactService);
  });

  it('should be created', () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });

  it('should return a string when message is successfully sent', () => {
    const message = { name: 'name', email: 'email', message: 'message'};
    const messageResponse = { message: 'Your message has successfully been sent!'};
    let response;
    contactService.sendMessage(message).subscribe(res => response = res);

    spyOn(contactService, 'sendMessage').and.callFake(() => of(messageResponse));

    http.expectOne('http://localhost:3030/api/contact').flush(messageResponse);
    expect(response).toEqual(messageResponse);
    http.verify();
  });

  it('should return a string when there is an error when sending the message', () => {
    const message = { name: 'name', email: 'email', message: 'message'};
    const messageResponse = { message: 'There was an error sending your message. Please try again later.'};    
    let errorResponse;
    contactService.sendMessage(message).subscribe(res => {}, err => {
      errorResponse = err;
    });
    
    http
      .expectOne('http://localhost:3030/api/contact')
      .flush({message: messageResponse}, {status: 500, statusText: 'Internal Server Error'});
    expect(errorResponse.error.message).toEqual(messageResponse);
    http.verify();
  });
});
