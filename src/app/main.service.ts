import { Injectable } from '@angular/core';

@Injectable()


export class MainService {
  quote: string;

  constructor() {
  }

  getQuote(val: string) {
    this.quote = val;
  };
}
