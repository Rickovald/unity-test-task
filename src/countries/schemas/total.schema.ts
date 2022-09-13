import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TotalDocument = Total & Document;

@Schema({ collection: 'total' })
export class Total {
  @Prop()
  _id: string;
  @Prop()
  count: number;
  @Prop()
  longitude: number[];
  @Prop()
  latitude: number[];
}

export const TotalSchema = SchemaFactory.createForClass(Total);
