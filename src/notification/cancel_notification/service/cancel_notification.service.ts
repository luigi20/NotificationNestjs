import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@notification/shared/repositories/NotificationRepository';
import { NotificationNotFound } from '@notification/shared/errors/NotificationNotFound';
import { ICancelNotificationRequest } from './interfaces/ICancelNotificationRequest';

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotificationService {
  constructor(private notificationsRepository: NotificationRepository) { }

  async execute(
    request: ICancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }
    notification.cancel();
    await this.notificationsRepository.save(notificationId, notification);
  }
}