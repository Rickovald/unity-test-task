import { Controller, Get } from '@nestjs/common';
import { Country } from './schemas/country.schema';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  generateTotalCollection(): Promise<Country[]> {
    const total = this.countriesService.coordinatsAgregate();
    return total;
  }
}
