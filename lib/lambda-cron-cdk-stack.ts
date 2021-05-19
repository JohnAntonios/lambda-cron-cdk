import * as cdk from "@aws-cdk/core";
import { Function, AssetCode, Runtime } from "@aws-cdk/aws-lambda";
import { Rule, Schedule } from "@aws-cdk/aws-events";
import { LambdaFunction } from "@aws-cdk/aws-events-targets";

export class LambdaCronStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFn = new Function(this, "LambdaCronFn", {
      code: new AssetCode("lambda"),
      handler: "dist/lambda.handler",
      runtime: Runtime.NODEJS_14_X,
    });

    const cronRule = new Rule(this, "LambdaCronScheduleRule", {
      schedule: Schedule.cron({}),
    });

    cronRule.addTarget(new LambdaFunction(lambdaFn));
  }
}
