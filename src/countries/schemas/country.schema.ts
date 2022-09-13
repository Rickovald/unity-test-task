import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountryDocument = Country & Document;

interface ILocation {
  ll: number[];
}

@Schema({ collection: 'test1' })
export class Country {
  @Prop()
  country: string;
  @Prop()
  city: string;
  @Prop()
  name: string;
  @Prop(
    raw({
      ll: { type: Array },
    }),
  )
  location: ILocation;
  @Prop([String])
  students: object[];
}

export const CountrySchema = SchemaFactory.createForClass(Country);
