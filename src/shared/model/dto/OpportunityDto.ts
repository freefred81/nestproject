import { IsString, IsBoolean, IsNotEmpty, Length } from "class-validator";
import { plainToClass, Exclude, Expose } from "class-transformer";
import { Opportunity } from "../entities/opportunity.entity";


export interface IOpportunityDto {
  recordtypeid: string;
  accountid: string;
  stagename: string;
  faseDettaglioC: string;
  name: string;
  ownerid: string;
  isdeleted?: boolean;
  systemmodstamp?: string;
  createddate?: string;
  createdbyid: string;
  contactid: string;
  codicePraticaC: string;
  sfid: string;
  id: number;
  hcLastop: string;
  hcErr: string;
}

@Exclude()
export class OpportunityDto implements IOpportunityDto {
  @Expose()
  recordtypeid: string;

  @Expose()
  accountid: string;

  @Expose()
  stagename: string;

  @Expose()
  faseDettaglioC: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  ownerid: string;

  @Expose()
  @IsBoolean()
  isdeleted?: boolean;

  @Expose()
  systemmodstamp?: string;

  @Expose()
  createddate?: string;

  @Expose()
  createdbyid: string;

  @Expose()
  contactid: string;

  @IsNotEmpty({
    message: "codicePraticaC is required."
  })
  @Expose()
  @IsString()
  codicePraticaC: string;

  @IsNotEmpty({
    message: "sfid is required."
  })
  @Expose()
  @Length(15, 18)
  sfid: string;

  @Expose()
  id: number;

  @Expose()
  hcLastop: string;

  @Expose()
  hcErr: string;

  ToEntity(): Opportunity {
    const opp = plainToClass(Opportunity, this);
    return opp;
  }
}
