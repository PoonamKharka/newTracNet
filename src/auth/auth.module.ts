import { Module } from "@nestjs/common"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UsersService } from "../users/users.service";
import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from "../users/users.model"
import { LocalStrategy } from 'src/local.auth';
import { AuthService } from './auth.service';
import { PassportModule } from "@nestjs/passport"
import { UserModule } from "../users/users.module";


@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' },
  }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  providers: [AuthService, UsersService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule { }