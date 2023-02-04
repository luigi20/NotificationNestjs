import { Test, TestingModule } from '@nestjs/testing';
import { GetNotificationService } from '../service/get_notification.service';

describe('GetNotificationService', () => {
  let service: GetNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetNotificationService],
    }).compile();

    service = module.get<GetNotificationService>(GetNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
