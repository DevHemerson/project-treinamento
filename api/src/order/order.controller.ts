import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }


  @Get()
  Index() {
    return this.orderService.getOrder();
  }

  @Get(':id')
  async Details(@Param() params: { id: number }, @Res() res) {
    try {
      res.json(await this.orderService.getOrdersDetail(params.id));
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  @Patch(':id')
  Update(@Param() params: { id: number }, @Body() data: any) {
    return this.orderService.updateOrder(params.id, data);
  }

  @Post()
  Create(@Body() data: any) {
    return this.orderService.createOrder(data);
  }

  @Delete(':id')
  Delete(@Param() params: { id: number }) {
    return this.orderService.deleteOrder(params.id);
  }
}
