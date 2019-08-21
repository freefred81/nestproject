import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  Inject,
} from '@nestjs/common';

import { OpportunityDto } from 'src/shared/model/dto/OpportunityDto';
import { QueryParams } from '../../shared/model/common/queryparams';
import { OpportunityService } from '../service/opportunity.service';

@Controller('opportunity')
export class OpportunityController {
  constructor(private readonly opportunityService: OpportunityService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) //check validation of DTO
  async create(
    @Body() opportunityDto: OpportunityDto,
  ): Promise<OpportunityDto> {
   
    const result = await this.opportunityService.insert(opportunityDto);
    return result
  
  }

  @Get()
  async findAll(@Query() query: QueryParams): Promise<OpportunityDto[]> {
    const resultEntities = await this.opportunityService.getAll();
    return resultEntities;
  }

  @Get('not/deleted')
  async findAllNotDeleted(@Query() query: QueryParams): Promise<OpportunityDto[]> {
    const resultEntities = await this.opportunityService.findNotDeleted(query);
    return resultEntities;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} opportunity`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} opportunity`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} opportunity`;
  }
}
