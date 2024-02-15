import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CarsController } from './cars.controller'
import { CarsService } from './cars.service'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/test'),
        CarsModule,
    ],
    controllers: [CarsController],
    providers: [CarsService],
})
export class CarsModule {}