import { Injectable } from '@nestjs/common';
import { IFromNotificationRequest } from './interfaces/IFromNotificationRequest';
import { IFromNotificationResponse } from './interfaces/IFromNotificationResponse';
import { INotificationRepository } from '../../shared/repositories/abstract_class/INotificationRepository';

@Injectable()
export class FromNotificationService {
  constructor(private notificationsRepository: INotificationRepository) { }

  async execute(
    request: IFromNotificationRequest,
  ): Promise<IFromNotificationResponse> {
    const { recipient_id } = request;
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipient_id);
    return {
      notifications,
    };
  }
}
