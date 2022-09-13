import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country, CountryDocument } from './schemas/country.schema';
import { Student, StudentDocument } from './schemas/students.schema';
import { Total, TotalDocument } from './schemas/total.schema';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name)
    private CountryModel: Model<CountryDocument>,
    @InjectModel(Student.name)
    private StudentModel: Model<StudentDocument>,
    @InjectModel(Total.name)
    private TotalModel: Model<TotalDocument>,
  ) {}

  async sendToTotal(total): Promise<Total | Total[]> {
    const istotal = await this.TotalModel.find().exec();
    console.log('anal', istotal);
    if (istotal[0]) {
      return await this.TotalModel.find().exec();
    } else {
      return await this.TotalModel.create(total);
    }
  }

  async coordinatsAgregate(): Promise<Country[]> {
    // const overall = await this.StudentModel.find().exec();
    // console.log(overall);

    const total = await this.CountryModel.aggregate([
      //! just for test
      // {
      //   $match: { country: 'Bedfordshire' },
      // },
      {
        $group: {
          _id: '$country',
          //? С этим заданием (пункт 4) я так и не разобрался, в основном потому что запутался в сути его
          // allDiffs: {''},
          count: { $count: {} },
          longitude: { $push: { $first: '$location.ll' } },
          latitude: { $push: { $last: '$location.ll' } },
        },
      },
    ]);
    await this.sendToTotal(total);

    return total;
  }
}
