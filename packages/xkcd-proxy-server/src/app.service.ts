import { Injectable } from '@nestjs/common';
import * as xkcd from 'xkcd';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getXkcd(res) {
    xkcd(data => res.json(data));
  }
}
