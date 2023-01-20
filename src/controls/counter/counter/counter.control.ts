import { ControlParams } from "../../control.model";
import { CounterBase } from "../counter-base/counter-base.control";

export class Counter extends CounterBase {
    constructor(params: ControlParams) {
        super(params);
    }
}