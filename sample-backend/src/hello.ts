import { ApiProperty } from '@nestjs/swagger';

export class Hello {
  constructor(greet: string) {
    this.greeting = greet;
    this.utc_time = new Date();
  }

  @ApiProperty()
  greeting: string;

  @ApiProperty()
  utc_time: Date;
}
