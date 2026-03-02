import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // 1. Swagger 문서 옵션 설정
   const config = new DocumentBuilder()
   .setTitle('GoldKiwi Workspace API')      // 문서 제목
   .setDescription('GoldKiwi Workspace API description') // 설명
   .setVersion('1.0')             // 버전
   .addBearerAuth()               
   .build();

 // 2. Swagger 문서 생성
 const document = SwaggerModule.createDocument(app, config);

 // 3. Swagger UI 라우트 등록
 SwaggerModule.setup('api', app, document);
 
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
