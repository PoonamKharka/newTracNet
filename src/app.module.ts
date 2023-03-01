import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ProductModule } from './auth/product/products.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/tracNet'), UserModule, AuthModule,ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
