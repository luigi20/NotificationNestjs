import { Injectable } from '@nestjs/common';
import { Notification } from '@model/model/notification';
import { Content } from '@model/model/notification-content';
import { INotificationRepository } from '@model/repositories/abstract_class/INotificationRepository';
import { ISendNotificationRequest } from './interfaces/ISendNotificationRequest';
import { ISendNotificationResponse } from './interfaces/ISendNotificationResponse';

@Injectable()
export class SendNotificationService {
  constructor(private notificationRepository: INotificationRepository) {

  }
  public async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipient_id, content, category } = request;
    const notification = new Notification({
      category: category,
      content: new Content(content),
      recipient_id: recipient_id,
    });
    await this.notificationRepository.create(notification);
    return { notification };
  }
}
