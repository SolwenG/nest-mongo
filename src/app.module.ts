import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CarsModule } from './cars/cars.module'
import { StatusModule } from './status/status.module'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/test'),
        CarsModule,
        StatusModule,
    ],
})
export class AppModule {}
