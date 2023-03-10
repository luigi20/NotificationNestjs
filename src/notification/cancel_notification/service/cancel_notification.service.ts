import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from '@notification/shared/errors/NotificationNotFound';
import { ICancelNotificationRequest } from './interfaces/ICancelNotificationRequest';
import { INotificationRepository } from '../../shared/repositories/abstract_class/INotificationRepository';
import { NotificationRepository } from '../../shared/repositories/NotificationRepository';

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotificationService {
  constructor(private notificationsRepository: INotificationRepository) { }

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