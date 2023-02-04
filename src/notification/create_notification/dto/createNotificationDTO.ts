import { IsString, IsUUID, Length } from 'class-validator';
class CreateNotificationDTO {

  @IsUUID()
  recipient_id: string;

  @IsString()
  @Length(5, 240)
  content: string;

  @IsString()
  category: string;
}
export { CreateNotificationDTO };
