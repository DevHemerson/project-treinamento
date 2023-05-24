import { Component, OnInit } from '@angular/core';
import { BusinessPartnersService } from './business-partners.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    CardName: '',
    avatar: '',
    Address: '',
    ZipCode: '',
    CardCode: 0
  });
  constructor(private apiSvc: BusinessPartnersService, private formBuilder: FormBuilder,) { }
  ngOnInit(): void {
    this.reload()
  }
  reload() {
    this.apiSvc.getBusinessPartners().subscribe((data: any) => {
      this.businessPartners = data;
    })
  }
  title = 'webapp';
  businessPartners: { CardCode: number, CardName: string, data: any }[] = [];
  getBusinessPartnerDetail(CardCode: number) {
    this.apiSvc.getBusinessPartnerDetail(CardCode).subscribe((data: any) => {
      this.businessPartners = data;
    })
  }
  deleteBusinessPartner(CardCode: number) {
    this.apiSvc.deleteBusinessPartner(CardCode).subscribe((data: any) => {
      this.businessPartners = data;
    });
  }
  onSubmit(): void {

    const data = this.checkoutForm.getRawValue()
    if(!!data.CardCode && data.CardCode > 0){
      this.apiSvc.updateBusinessPartner(data.CardCode, data).subscribe((data: any) => {
        this.businessPartners = data;
        this.reload()
      });
      return;
    }
    this.apiSvc.createBusinessPartner(data).subscribe((data: any) => {
      this.checkoutForm.reset();
      this.reload()
    });
    return;
  }

  populate(data: any): void {
    this.checkoutForm.patchValue(data)
  }

  get CardCode() {
    return this.checkoutForm.controls['CardCode'].value
  }
}
