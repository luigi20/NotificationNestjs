import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationDTO {
  @IsNotEmpty()
  @IsUUID()
  recipient_id: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}