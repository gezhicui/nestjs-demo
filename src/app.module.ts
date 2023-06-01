import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GirlController } from './girl/girl.controller';
import { GirlService } from './girl/girl.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库的连接地址host
      port: 3306, // 数据库的端口 3306
      username: 'root', // 连接账号
      password: 'root', // 连接密码
      database: 'test_db', // 连接的表名
      retryDelay: 500, // 重试连接数据库间隔
      retryAttempts: 10, // 允许重连次数
    }),
  ],
  controllers: [GirlController],
  providers: [GirlService],
})
export class AppModule {}
