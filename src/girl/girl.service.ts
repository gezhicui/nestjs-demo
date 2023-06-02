import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
export class GirlService {
  constructor(
    @InjectRepository(Girl) private readonly girl: Repository<Girl>,
  ) {}

  getGirls() {
    return {
      code: 0,
      data: ['翠花', '小红', '大丫'],
      msg: '请求女孩列表成功',
    };
  }
  addGirl() {
    const data = new Girl();
    data.name = '大梨';
    data.age = 25;
    data.skill = '精油按摩,日式按摩';
    return this.girl.save(data);
  }
  delGirl(id: number | string) {
    return this.girl.delete(id);
  }
}
