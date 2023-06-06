import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any; //添加项

function MiddleWareAll(req: any, res: any, next: any) {
  console.log('我是全局中间件.....');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(MiddleWareAll);
  await app.listen(4000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
