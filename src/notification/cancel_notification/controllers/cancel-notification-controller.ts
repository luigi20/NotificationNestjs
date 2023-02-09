import { Controller, Param, Patch } from '@nestjs/common';
import { CancelNotificationService } from '../service/cancel_notification.service';

@Controller('notification')
export class CancelNotificationController {
  constructor(
    private readonly cancelNotificationService: CancelNotificationService,
  ) { }

  @Patch(':id/cancel')
  public async cancel(@Param('id') id: string) {
    await this.cancelNotificationService.execute({
      notificationId: id,
    });
  }
}
