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
    return this.girl.find();
  }
  getGirlByName(name: string) {
    return this.girl.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }
  addGirl() {
    const data = new Girl();
    data.name = '大梨';
    data.age = Math.ceil(Math.random() * 100);
    data.skill = '精油按摩,日式按摩';
    return this.girl.save(data);
  }
  delGirl(id: number | string) {
    return this.girl.delete(id);
  }
  updateGirl(id: number | string) {
    const data = new Girl();
    data.name = '王小丫';
    data.age = 19;
    return this.girl.update(id, data);
  }
}
