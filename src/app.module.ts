import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { PaginationModule } from './pagination/pagination.module';
import { ExceptionFilterModule } from './exception-filter/exception-filter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProjectModule,
    PaginationModule,
    ExceptionFilterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
