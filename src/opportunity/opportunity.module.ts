import { Module } from "@nestjs/common";

import { TypeOrmModule } from "@nestjs/typeorm";
import { Opportunity } from "../shared/model/entities/opportunity.entity";
import { OpportunityService } from "./service/opportunity.service";
import { OpportunityController } from "./controller/opportunity.controller";
import { OpportunityRepositoryProvider } from "./repository/classes/opportunity.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Opportunity])],
  providers: [OpportunityService, OpportunityRepositoryProvider],
  controllers: [OpportunityController]
})
export class OpportunityModule {}
