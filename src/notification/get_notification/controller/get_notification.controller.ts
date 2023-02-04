import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetNotificationService } from '../service/get_notification.service';

@Controller('notification')
export class GetNotificationController {
  constructor(
    private readonly getNotificationService: GetNotificationService,
    private readonly prisma: PrismaService,
  ) { }

  @Get()
  public async createNotification() {
    return await this.prisma.notifications.findMany();
  }

}
