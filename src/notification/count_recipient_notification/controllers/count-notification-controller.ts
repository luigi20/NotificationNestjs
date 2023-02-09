import { Controller, Get, Param } from '@nestjs/common';
import { CountRecipientNotifications } from '../service/count_notification.service';

@Controller('notification')
export class CountNotificationController {
  constructor(
    private readonly countRecipientNotifications: CountRecipientNotifications,
  ) { }

  @Get('count/from/:id')
  async countFromRecipient(@Param('id') recipient_id: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipient_id,
    });
    return {
      count,
    };
  }
}
