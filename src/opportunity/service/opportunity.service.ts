import { Injectable, Inject } from "@nestjs/common";
// import { OpportunityRepository } from '../repository/classes/opportunity.repository';
import { OpportunityDto } from "src/shared/model/dto/OpportunityDto";
import { QueryParams } from "dist/src/shared/model/common/queryparams";
import { OpportunityRepository } from "../repository/classes/opportunity.repository";
import { Response } from "./../../shared/model/common";

@Injectable()
export class OpportunityService {
  constructor(
    @Inject("OpportunityRepository")
    private opportunityRepository: OpportunityRepository
  ) {}


  getAll = async (): Promise<OpportunityDto[]> => {
    const result = await this.opportunityRepository.getAll();
    return result.map(xx => xx.ToDto());
  };


  findNotDeleted = async (
    params: QueryParams
  ): Promise<Response<OpportunityDto[]>> => {

    let query = this.opportunityRepository
      .getAll()
      .where(xx => xx.isdeleted)
      .isFalse();

    const counted = await query.count();

    // Set paging parameters on the query.
    query = query.skip(params.skip).take(params.take);

    const result = await query;

    return {
      count: counted,
      data: result.map(xx => xx.ToDto())
    } as Response<OpportunityDto[]>;
  };

  
  insert = async (opportunity: OpportunityDto): Promise<OpportunityDto> => {
    const opp = opportunity.ToEntity();

    const result = await this.opportunityRepository.create(opp);
    return result.ToDto();
  };
}
