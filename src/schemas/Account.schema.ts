import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Account extends Document {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
