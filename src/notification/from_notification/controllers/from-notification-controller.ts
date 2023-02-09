import { Controller, Get, Param } from '@nestjs/common';
import { NotificationViewModel } from '../../shared/view-model/NotificationViewModel';
import { FromNotificationService } from '../service/from_notification.service';

@Controller('notification')
export class FromNotificationController {
  constructor(
    private readonly fromNotificationService: FromNotificationService,
  ) { }

  @Get('from/:id')
  async getFromRecipient(@Param('id') recipient_id: string) {
    const { notifications } = await this.fromNotificationService.execute({
      recipient_id,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }
}
