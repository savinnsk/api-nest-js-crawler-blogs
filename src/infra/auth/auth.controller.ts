import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthRequest } from 'src/domain/auth/protocols/auth-request';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth-guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('authentication')
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
