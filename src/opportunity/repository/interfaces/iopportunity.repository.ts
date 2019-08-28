import { Opportunity } from "dist/src/shared/model/entities/opportunity.entity";
import { IRepositoryBase } from "typeorm-linq-repository";

export interface IOpportunityRepository extends IRepositoryBase<Opportunity> {}
