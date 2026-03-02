import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkspaceModule } from './workspace/workspace.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WorkspaceModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
