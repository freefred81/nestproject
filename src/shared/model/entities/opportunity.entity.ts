import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

import { OpportunityDto } from "../dto/OpportunityDto";
import { plainToClass } from "class-transformer";

@Entity("opportunity", { schema: "public" })
@Index("hcu_idx_opportunity_sfid", ["sfid"], { unique: true })
export class Opportunity {
  @Column("character varying", {
    nullable: true,
    length: 18,
    name: "recordtypeid"
  })
  recordtypeid: string | null;

  @Column("character varying", {
    nullable: true,
    length: 18,
    name: "accountid"
  })
  accountid: string | null;

  @Column("character varying", {
    nullable: true,
    length: 40,
    name: "stagename"
  })
  stagename: string | null;

  @Column("character varying", {
    nullable: true,
    length: 255,
    name: "fase_dettaglio__c"
  })
  fase_dettaglio__c: string | null;

  @Column("character varying", {
    nullable: true,
    length: 120,
    name: "name"
  })
  name: string | null;

  @Column("character varying", {
    nullable: true,
    length: 18,
    name: "ownerid"
  })
  ownerid: string | null;

  @Column("boolean", {
    nullable: true,
    name: "isdeleted"
  })
  isdeleted: boolean | null;

  @Column("timestamp without time zone", {
    nullable: true,
    name: "systemmodstamp"
  })
  systemmodstamp: Date | null;

  @Column("timestamp without time zone", {
    nullable: true,
    name: "createddate"
  })
  createddate: Date | null;

  @Column("character varying", {
    nullable: true,
    length: 18,
    name: "createdbyid"
  })
  createdbyid: string | null;

  @Column("character varying", {
    nullable: true,
    length: 18,
    name: "contactid"
  })
  contactid: string | null;

  @Column("character varying", {
    nullable: true,
    length: 50,
    name: "codice_pratica__c"
  })
  codice_pratica__c: string | null;

  @Column("character varying", {
    nullable: true,
    length: 18,
    name: "sfid"
  })
  sfid: string | null;

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: true,
    length: 32,
    name: "_hc_lastop"
  })
  _hc_lastop: string | null;

  @Column("text", {
    nullable: true,
    name: "_hc_err"
  })
  _hc_err: string | null;

  ToDto(): OpportunityDto {
    const oppDto = plainToClass(OpportunityDto, this);
    return oppDto;
  }
}
