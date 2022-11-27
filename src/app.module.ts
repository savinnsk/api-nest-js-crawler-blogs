import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [AuthService],
})
export class AppModule {}
