import { Body, Controller, Get, Post } from '@nestjs/common'
import { CarsService } from './cars.service'
import { CreateCarDto } from './dto/create-car.dto'
import { Car } from './schema/car.schema'

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService) {}

    @Post()
    async create(@Body() createCarDto: CreateCarDto) {
        await this.carService.create(createCarDto)
    }

    @Get()
    async findAll(): Promise<Car[]> {
        return this.carService.findAll()
    }
}
