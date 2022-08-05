import { Body } from "matter-js";
import { BodySpec } from "./BodySpec";


export type BodyProducer = (spec: BodySpec) => Body;
