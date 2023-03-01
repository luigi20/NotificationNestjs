import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../shared/repositories/abstract_class/INotificationRepository';
import { ICountRecipientNotificationsRequest } from './interfaces/ICountNotificationRequest';
import { ICountRecipientNotificationsResponse } from './interfaces/ICountNotificationResponse';

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: INotificationRepository) { }

  async execute(
    request: ICountRecipientNotificationsRequest,
  ): Promise<ICountRecipientNotificationsResponse> {
    const { recipient_id } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipient_id,
    );
    return {
      count,
    };
  }
}