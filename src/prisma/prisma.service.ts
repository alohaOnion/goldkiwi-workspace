import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect(); // NestJS 모듈 초기화 시 DB 연결
  }

  async onModuleDestroy() {
    await this.$disconnect(); // 모듈 종료 시 연결 종료
  }
}