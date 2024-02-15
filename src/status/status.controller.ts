import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { StatusService } from './status.service'
import { Status } from '../schema/company.schema'
import { CreateStatusDto } from '../cars/dto/create-car.dto'

@Controller('status')
export class StatusController {
    constructor(private readonly statusService: StatusService) {}

    @Post()
    async create(@Body() createStatusDto: CreateStatusDto) {
        await this.statusService.create(createStatusDto)
    }

    @Get()
    async findAll(): Promise<Status[]> {
        return this.statusService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Status> {
        return this.statusService.findById(id)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.statusService.delete(id)
    }
}
