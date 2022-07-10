import { Injectable } from '@nestjs/common';
import { Hello } from './hello';

@Injectable()
export class AppService {
  getHello(): Hello {
    return new Hello('Hello from nest.js!');
  }
}
