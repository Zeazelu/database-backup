import { Test, TestingModule } from '@nestjs/testing';
import { FetchIpService } from './fetch-ip.service';

describe('FetchIpService', () => {
  let service: FetchIpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchIpService],
    }).compile();

    service = module.get<FetchIpService>(FetchIpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
