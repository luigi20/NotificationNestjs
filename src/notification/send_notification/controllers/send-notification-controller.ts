import { Body, Controller, Post } from '@nestjs/common';
import { NotificationViewModel } from '../../shared/view-model/NotificationViewModel';
import { CreateNotificationDTO } from '../dto/createNotificationDTO';
import { SendNotificationService } from '../service/send_notification.service';

@Controller('notification')
export class SendNotificationController {
  constructor(
    private readonly sendNotificationService: SendNotificationService,
  ) { }

  @Post()
  public async create(@Body() body: CreateNotificationDTO) {
    const { recipient_id, content, category } = body;
    const { notification } = await this.sendNotificationService.execute({
      content,
      category,
      recipient_id,
    });
    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
