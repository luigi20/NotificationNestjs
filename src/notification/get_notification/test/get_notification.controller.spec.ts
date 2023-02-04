import { Test, TestingModule } from '@nestjs/testing';
import { GetNotificationController } from '../controller/get_notification.controller';
import { GetNotificationService } from '../service/get_notification.service';

describe('GetNotificationController', () => {
  let controller: GetNotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetNotificationController],
      providers: [GetNotificationService],
    }).compile();

    controller = module.get<GetNotificationController>(GetNotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
