import { Controller, Param, Patch } from '@nestjs/common';
import { ReadNotificationService } from '../service/read_notification.service';

@Controller('notification')
export class ReadNotificationController {
  constructor(
    private readonly readNotificationService: ReadNotificationService,
  ) { }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotificationService.execute({
      notificationId: id,
    });
  }
}
