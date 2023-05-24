import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class OrderService {
  async getOrder() {
    const { data } = await axios.get("https://637283b2348e947299f77e08.mockapi.io/b1s/v2/Orders");
    return data;
  }

  async getOrdersDetail(id: number) {
    try {
      const { data } = await axios.get(`https://637283b2348e947299f77e08.mockapi.io/b1s/v2/Orders/${id}`);
      return data;
    } catch (error) {
      throw new Error("Erro Encontrado");
    }
  }

  async updateOrder(id: number, newData: any) {
    const { data } = await axios.put(`https://637283b2348e947299f77e08.mockapi.io/b1s/v2/Orders/${id}`, newData);
    return data;
  }

  async createOrder(newData: any) {
    const { data } = await axios.post("https://637283b2348e947299f77e08.mockapi.io/b1s/v2/Orders", newData);
    return data;
  }

  async deleteOrder(id: number) {
    const { data } = await axios.delete(`https://637283b2348e947299f77e08.mockapi.io/b1s/v2/Orders/${id}`);
    return data;
  }
}
