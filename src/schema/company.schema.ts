import mongoose, { HydratedDocument } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type CarDocument = HydratedDocument<Car>

@Schema()
export class Status {
    @Prop()
    name: string
}
export const StatusSchema = SchemaFactory.createForClass(Status)

@Schema()
export class Car {
    @Prop()
    brand: string

    @Prop()
    price: string

    @Prop()
    description: string

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Status' }] })
    status: Status
}

export const CarSchema = SchemaFactory.createForClass(Car)
