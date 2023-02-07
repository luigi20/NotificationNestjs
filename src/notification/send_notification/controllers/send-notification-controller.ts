import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationDTO } from '../dto/createNotificationDTO';
import { SendNotificationService } from '../service/send_notification.service';

@Controller('notification')
export class SendNotificationController {
  constructor(
    private readonly sendNotificationService: SendNotificationService,
  ) { }

  @Post()
  public async create(@Body() body: CreateNotificationDTO) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotificationService.execute({
      content,
      category,
      recipientId,
    });
    return { notification };
  }
}
