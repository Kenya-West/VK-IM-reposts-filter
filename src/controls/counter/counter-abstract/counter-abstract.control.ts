import { ControlAbstract } from "../../control-abstract.control";
import { ControlParams } from "../../control.model";

export abstract class CounterAbstract extends ControlAbstract {
    constructor(params: ControlParams) {
        super();
    }
}