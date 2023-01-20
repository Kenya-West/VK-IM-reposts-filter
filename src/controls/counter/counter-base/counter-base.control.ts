import { ControlBase } from "../../control-base.control";
import { ControlParams } from "../../control.model";
import { CounterAbstract } from "../counter-abstract/counter-abstract.control";

export abstract class CounterBase extends ControlBase implements CounterAbstract {
    protected constructor(params: ControlParams) {
        super(params);
    }
}