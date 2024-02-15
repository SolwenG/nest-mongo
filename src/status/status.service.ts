import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Status } from '../schema/company.schema'
import { Model } from 'mongoose'
import { CreateStatusDto } from '../cars/dto/create-car.dto'

@Injectable()
export class StatusService {
    constructor(
        @InjectModel(Status.name) private readonly statusModel: Model<Status>
    ) {}

    async create(createStatusDto: CreateStatusDto): Promise<Status> {
        const createStatus = await this.statusModel.create(createStatusDto)
        return createStatus
    }

    async findAll(): Promise<Status[]> {
        return this.statusModel.find().exec()
    }

    async findById(id: string): Promise<Status> {
        return this.statusModel.findById(id).exec()
    }

    async delete(id: string) {
        const deleteStatus = await this.statusModel
            .findByIdAndDelete({ _id: id })
            .exec()
        return deleteStatus
    }
}
