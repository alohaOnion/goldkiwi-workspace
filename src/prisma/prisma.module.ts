import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 어디서든 주입 가능하게 글로벌 모듈로 등록
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}