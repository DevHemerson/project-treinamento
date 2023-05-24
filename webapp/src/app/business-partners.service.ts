import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessPartnersService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBusinessPartners() {
    return this.http.get(this.apiUrl);
  }

  getBusinessPartnerDetail(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateBusinessPartner(id: number, data: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }

  createBusinessPartner(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  deleteBusinessPartner(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
