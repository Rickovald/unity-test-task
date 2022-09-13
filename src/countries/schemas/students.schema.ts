import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ collection: 'test2' })
export class Student {
  @Prop()
  country: string;
  @Prop()
  overallStudents: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
