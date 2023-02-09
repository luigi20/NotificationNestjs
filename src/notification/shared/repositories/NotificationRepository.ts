import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';
import { Notification } from '@model/model/notification';
import { INotificationRepository } from './abstract_class/INotificationRepository';
import { PrismaNotificationMapper } from '@infra/prisma/PrismaNotificationMapper';

@Injectable()
class NotificationRepository implements INotificationRepository {
  constructor(private prismaService: PrismaService) { }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notifications.create({
      data: raw,
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notifications.findUnique({
      where: {
        id: notificationId,
      },
    });

    if (!notification) {
      return null;
    }
    return PrismaNotificationMapper.toDomain(notification);
  }

  async save(id: string, notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notifications.update({
      where: {
        id: id,
      },
      data: raw,
    });
  }

  async findManyByRecipientId(recipient_id: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notifications.findMany({
      where: {
        recipient_id,
      },
    });

    return notifications.map(PrismaNotificationMapper.toDomain);
  }

  async countManyByRecipientId(recipient_id: string): Promise<number> {
    const count = await this.prismaService.notifications.count({
      where: {
        recipient_id,
      },
    });

    return count;
  }
}
export { NotificationRepository };
