import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './countries/country.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/unity'),
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
