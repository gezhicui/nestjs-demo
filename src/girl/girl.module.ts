import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';
import { CounterMiddleware } from 'src/counter.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  // providers: [GirlService],
  providers: [
    {
      provide: 'girl',
      useClass: GirlService,
    },
    {
      provide: 'MyFactory',
      useFactory() {
        console.log('myFactory---------:');
        return 'console.log() function';
      },
    },
  ],
})
export class GirlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CounterMiddleware).forRoutes('girl');
  }
}
