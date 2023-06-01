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

  //------新增Post请求方法
  @Post('/add')
  addGirl(@Body() body): any {
    console.log(body);
    return this.girlService.addGirl();
  }

  @Get('/getGirlById')
  getGirlById(@Query() query): any {
    console.log('req', query);
    //因为通过Get方式传递过来的是字符串，所有我们需要用parseInt转化为数字
    const id: number = parseInt(query.id);
    return this.girlService.getGirlById(id);
  }

  @Get('/findGirlById/:id/:name')
  findGirlById(@Param() params, @Headers() header): any {
    console.log(params.name);
    console.log(header);
    const id: number = parseInt(params.id);
    return this.girlService.getGirlById(id);
  }
}
