import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './infra/auth/auth.module';
import { AuthService } from './infra/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [AuthService, JwtService],
})
export class AppModule {}
