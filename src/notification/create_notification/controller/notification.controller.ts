import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { NotificationService } from '../service/notification.service';
import { randomUUID } from 'crypto';
import { CreateNotificationDTO } from '../../dto/createNotificationDTO';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly prisma: PrismaService) { }

  @Post()
  public async createNotification(@Body() data: CreateNotificationDTO) {
    return await this.prisma.notifications.create({
      data: {
        content: 'Você tem uma nova solicitação de amizade',
        category: 'social',
        recipient_id: randomUUID(),
      }
    })
  }
}
