import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from '@notification/shared/errors/NotificationNotFound';
import { INotificationRepository } from '../../shared/repositories/abstract_class/INotificationRepository';
import { NotificationRepository } from '../../shared/repositories/NotificationRepository';
import { IReadNotificationRequest } from './interfaces/IReadNotificationRequest';

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotificationService {
  constructor(private notificationsRepository: INotificationRepository) { }

  async execute(
    request: IReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );
    if (!notification) {
      throw new NotificationNotFound();
    }
    notification.read();
    await this.notificationsRepository.save(notificationId, notification);
  }
}