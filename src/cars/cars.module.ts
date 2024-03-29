import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CarsController } from './cars.controller'
import { CarsService } from './cars.service'
import { Car, CarSchema, Status, StatusSchema } from '../schema/company.schema'

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Car.name, schema: CarSchema },
            { name: Status.name, schema: StatusSchema },
        ]),
    ],
    controllers: [CarsController],
    providers: [CarsService],
})
export class CarsModule {}
