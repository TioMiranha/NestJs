import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  checkLogin(LoginDto: LoginDto) {
    console.log(typeof LoginDto, LoginDto);
    return LoginDto;
  }
}
