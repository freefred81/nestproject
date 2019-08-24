import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { OpportunityRepository } from '../repository/classes/opportunity.repository';
import { OpportunityDto } from 'src/shared/model/dto/OpportunityDto';
import { QueryParams } from 'dist/src/shared/model/common/queryparams';
import { Opportunity } from 'src/shared/model/entities/opportunity.entity';
import { RepositoryBase, LinqRepository } from 'typeorm-linq-repository';
import { OpportunityRepository } from '../repository/classes/opportunity.repository';



@Injectable()
export class OpportunityService {
  constructor(
    // @InjectRepository(Opportunity)
    private opportunityRepository: OpportunityRepository

  ) { }



  getAll = async (): Promise<OpportunityDto[]> => {

    const result = await this.opportunityRepository.getAll();
    return result.map(xx => xx.ToDto());

  };


  findNotDeleted = async (params: QueryParams): Promise<OpportunityDto[]> => {

    let query = this.opportunityRepository.getAll()
      .where(xx => xx.isdeleted)
      .isFalse();

    const countNotDeleted = await query.count();

    // Set paging parameters on the query.
    query =  query
      .skip(params.skip)
      .take(params.tale);

    const result = await query;
    return result.map(xx => xx.ToDto());

  }


  insert = async (opportunity: OpportunityDto): Promise<OpportunityDto> => {

    const opp = opportunity.ToEntity();

    const result = await this.opportunityRepository.create(opp);
    return result.ToDto();
  };

}
