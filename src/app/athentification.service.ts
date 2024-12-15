import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class User {
  accessToken: any;
  role: any;
}

@Injectable({
  providedIn: 'root'
})
export class AthentificationService {
  roleAs: string | null = null;

  constructor(private http: HttpClient) { }

  singin(data: any): Observable<User> {
    return this.http.post<User>('http://localhost:3000/signin', data);
  }

  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getRole(role: string): boolean {
    this.roleAs = localStorage.getItem('role');
    return this.roleAs === role;
  }
}
