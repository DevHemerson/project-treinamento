import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Teste';
  }

  async getBusinessPartners() {
    const { data } = await axios.get("https://637283b2348e947299f77e08.mockapi.io/b1s/v2/BusinessPartners");
    return data;
  }

  async getBusinessPartnersDetail(id: number) {
    try {
      const { data } = await axios.get(`https://637283b2348e947299f77e08.mockapi.io/b1s/v2/BusinessPartners/${id}`);
      return data;
    } catch (error) {
      throw new Error("Não encontrado");
    }
  }

  async updateBusinessPartners(id: number, newData: any) {
    const { data } = await axios.put(`https://637283b2348e947299f77e08.mockapi.io/b1s/v2/BusinessPartners/${id}`, newData);
    return data;
  }

  async createBusinessPartners(newData: any) {
    const { data } = await axios.post('https://637283b2348e947299f77e08.mockapi.io/b1s/v2/BusinessPartners', newData);
    return data;
  }

  async deleteBusinessPartners(id: number) {
    const { data } = await axios.delete(`https://637283b2348e947299f77e08.mockapi.io/b1s/v2/BusinessPartners/${id}`);
    return data;
  }
}
