/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {}
  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }
  @Get('/add')
  addGirl(@Body() body): any {
    console.log(body);
    return this.girlService.addGirl();
  }
  @Get('/delete/:id')
  deleteGirl(@Param() params): any {
    const id: number | string = params.id;
    return this.girlService.delGirl(id);
  }
}
