import { Test, TestingModule } from '@nestjs/testing';
import { FetchIpController } from './fetch-ip.controller';

describe('FetchIpController', () => {
  let controller: FetchIpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FetchIpController],
    }).compile();

    controller = module.get<FetchIpController>(FetchIpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
