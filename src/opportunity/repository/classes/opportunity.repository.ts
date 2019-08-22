import { EntityRepository, Repository, Connection } from 'typeorm';
import { Opportunity } from 'src/shared/model/entities/opportunity.entity';
import { Injectable } from '@nestjs/common';
import { RepositoryBase, LinqRepository } from "typeorm-linq-repository";
import { IOpportunityRepository } from '../interfaces/iopportunity.repository';


@Injectable()
// @EntityRepository(Opportunity)
export class OpportunityRepository extends LinqRepository<Opportunity> implements IOpportunityRepository {

    public constructor() {
        super(Opportunity);
    }

}
