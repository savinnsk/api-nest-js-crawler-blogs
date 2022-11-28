import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './infra/auth/auth.module';
import { AuthService } from './infra/auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/auth/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [
    AuthService,
    JwtService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
