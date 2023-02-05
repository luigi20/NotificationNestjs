import { Injectable } from '@nestjs/common';
import { Notification } from '../../shared/model/notification';
import { Content } from '../../shared/model/notification-content';
import { ISendNotificationRequest } from './interfaces/ISendNotificationRequest';
import { ISendNotificationResponse } from './interfaces/ISendNotificationResponse';

@Injectable()
export class SendNotificationService {
  public async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;
    const notification = new Notification({
      category: category,
      content: new Content(content),
      recipientId: recipientId,
    });
    return { notification };
  }
}
