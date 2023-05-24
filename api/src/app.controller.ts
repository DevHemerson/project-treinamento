import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('businessPartners')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  Index() {
    return this.appService.getBusinessPartners();
  }
  @Get(':id')
  async Detail(@Param() params: { id: number }, @Res() res) {
    try {
      //return this.appService.getBusinessPartnersDetail(params.id);
      res.json(await this.appService.getBusinessPartnersDetail(params.id));
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  @Patch(':id')
  Update(@Param() params: { id: number }, @Body() data: any) {
    return this.appService.updateBusinessPartners(params.id, data);
  }

  @Post()
  Create(@Body() data: any) {
    return this.appService.createBusinessPartners(data);
  }

  @Delete(':id')
  Remove(@Param() params: { id: number }) {
    return this.appService.deleteBusinessPartners(params.id);
  }
}
