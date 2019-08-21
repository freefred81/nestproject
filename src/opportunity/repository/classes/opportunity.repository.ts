import { EntityRepository, Repository, Connection } from 'typeorm';
import { Opportunity } from 'src/shared/model/entities/opportunity.entity';
import { Injectable } from '@nestjs/common';
import { RepositoryBase } from "typeorm-linq-repository";
import { IOpportunityRepository } from '../interfaces/iopportunity.repository';


@Injectable()
// @EntityRepository(Opportunity)
export class OpportunityRepository extends RepositoryBase<Opportunity> implements IOpportunityRepository {

  public constructor() {
    super(Opportunity);
  }

}
