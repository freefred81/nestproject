import { Opportunity } from "src/shared/model/entities/opportunity.entity";
import { IRepositoryBase } from "typeorm-linq-repository";

export interface IOpportunityRepository extends IRepositoryBase<Opportunity> {}
