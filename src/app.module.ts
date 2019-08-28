import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OpportunityController } from "./opportunity/controller/opportunity.controller";
import { OpportunityModule } from "./opportunity/opportunity.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "./shared/interceptors/logging.interceptor";
import { ErrorsInterceptor } from "./shared/interceptors/exception.interceptor";
import { TransformInterceptor } from "./shared/interceptors/transform.interceptor";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "****",
      database: "fscamuzzi",
      entities: [
        "./src/shared/model/entities/*.entity{.ts,.js}",
        "./src/shared/model/entities/**/*.entity{.ts,.js}"
      ],
      synchronize: false,
      migrationsRun: true,
      migrations: ["migration/*.ts"],
      cli: {
        migrationsDir: "./migration",
        entitiesDir: "./src/shared/model/entities"
      },
      logging: true
    }),
    OpportunityModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor
    }
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
  ]
})
export class AppModule {}
