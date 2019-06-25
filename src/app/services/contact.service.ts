import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Environment
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl: string = `${environment.apiUrl}contact`;

  constructor(private http: HttpClient) { }

  sendMessage(contactBody): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactBody);
  }
}
