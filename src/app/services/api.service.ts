import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_BASE_URL: string = 'http://localhost:8090';
  constructor(private http: HttpClient) { }

  post(url: string, payload: any) {
    return this.http.post(this.API_BASE_URL + url, payload);
  }
  put(url: string, payload: any) {
    return this.http.put(this.API_BASE_URL + url, payload);
  }
  get(url: string) {
    return this.http.get(this.API_BASE_URL + url);
  }
  delete(uri: string) {
    return this.http.delete(this.API_BASE_URL + uri);
  }
  postAuth(url: string, payload: any) {
    const header = this.getHeader();
    return this.http.post(this.API_BASE_URL + url, payload, header);
  }
  getAuth(url: string) {

    // return this.http.get(apiUrl, { headers: headers })
    const header = this.getHeader();
    return this.http.get(this.API_BASE_URL + url, header);
  }
  deleteAuth(url: string) {
    const header = this.getHeader();
    return this.http.delete(this.API_BASE_URL + url, header);
  }

  getHeader() {
    const token = sessionStorage.getItem('SESSION_TOKEN');
    const headers = new HttpHeaders({
      'Authorization': token || '',
    });
    return ({ headers: headers });
  }
}
