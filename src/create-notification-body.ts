import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotification {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(4, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}
