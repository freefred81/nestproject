-- Drop table

-- DROP TABLE public.opportunity;

CREATE TABLE public.opportunity (
	recordtypeid varchar(18) NULL,
	accountid varchar(18) NULL,
	stagename varchar(40) NULL,
	fase_dettaglio__c varchar(255) NULL,
	"name" varchar(120) NULL,
	ownerid varchar(18) NULL,
	isdeleted bool NULL,
	systemmodstamp timestamp NULL,
	createddate timestamp NULL,
	createdbyid varchar(18) NULL,
	contactid varchar(18) NULL,
	codice_pratica__c varchar(50) NULL,
	sfid varchar(18) NULL,
	id serial NOT NULL,
	"_hc_lastop" varchar(32) NULL,
	"_hc_err" text NULL,
	CONSTRAINT opportunity_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX hcu_idx_opportunity_sfid ON public.opportunity USING btree (sfid);
