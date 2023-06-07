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
  Inject,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(
    @Inject('girl') private girlService: GirlService,
    @Inject('MyFactory') private myFactory: string,
  ) {}

  @Get('/corstest')
  corsTest(): object {
    return { message: '测试跨域请求成功' };
  }

  @Get('/hotLoad')
  hotLoad(): any {
    return 'HotLoad Function';
  }

  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }

  @Get('/findGirlByName/:name')
  findGirlByName(@Param() params): any {
    console.log(params.name);
    const name: string = params.name;
    return this.girlService.getGirlByName(name);
  }

  @Get('/test')
  test(): any {
    console.log(this.myFactory);
    return this.myFactory;
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

  @Get('/update/:id')
  updateGirl(@Param() params): any {
    console.log('params', params);

    const id: number | string = params.id;
    console.log('editid--', id);
    return this.girlService.updateGirl(id);
  }
}
