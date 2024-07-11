import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    JwtModule.register({ global: true, secret: process.env.JWT_SECRETO, signOptions: { expiresIn: '6h' } }),
    MongooseModule.forRoot(process.env.MONGO_URI)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
