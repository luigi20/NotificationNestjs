import { Controller, Param, Patch } from '@nestjs/common';
import { UnreadNotificationService } from '../service/unread_notification.service';

@Controller('notification')
export class UnreadNotificationController {
  constructor(
    private readonly unreadNotificationService: UnreadNotificationService,
  ) { }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotificationService.execute({
      notificationId: id,
    });
  }
}
