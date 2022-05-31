import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHi(name): string {
    return `Hi ${name}`;
  }
  getHello(): string {
    return 'Hi World!';
  }
}
