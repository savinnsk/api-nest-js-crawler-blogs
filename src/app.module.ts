import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './infra/auth/auth.module';
import { AuthService } from './infra/auth/auth.service';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [AuthService],
})
export class AppModule {}
