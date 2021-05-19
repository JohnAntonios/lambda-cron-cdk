#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { LambdaCronStack } from "../lib/lambda-chron-new-stack";

const app = new cdk.App();
new LambdaCronStack(app, "LambdaChronNewStack");
