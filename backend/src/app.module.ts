import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressesModule } from './modules/addresses/addresses.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './modules/prisma/prisma.service';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './filters/global.filter.exeception';

const GlobalFilterProvider = {
  provide: APP_FILTER,
  useClass: GlobalExceptionFilter,
};

@Module({
  imports: [
    AddressesModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, GlobalFilterProvider],
})
export class AppModule {}
