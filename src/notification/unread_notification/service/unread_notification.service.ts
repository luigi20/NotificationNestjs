import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from '../../shared/errors/NotificationNotFound';
import { INotificationRepository } from '../../shared/repositories/abstract_class/INotificationRepository';
import { IUnreadNotificationRequest } from './interfaces/IUnreadNotificationRequest';

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotificationService {
  constructor(private notificationsRepository: INotificationRepository) { }

  async execute(
    request: IUnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationsRepository.save(notificationId, notification);
  }
}