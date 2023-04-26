import { Module } from '@nestjs/common';
import { FetchIpService } from './fetch-ip.service';
import { FetchIpController } from './fetch-ip.controller';

@Module({
  providers: [FetchIpService],
  controllers: [FetchIpController]
})
export class FetchIpModule {}
