import { ElementBase } from "../../element-base";
import { ElementParams } from "../../element.model";
import { CounterAbstract } from "../counter-abstract/counter-abstract";

export abstract class CounterBase extends ElementBase implements CounterAbstract {
    protected constructor(params: ElementParams) {
        super(params);
    }
}