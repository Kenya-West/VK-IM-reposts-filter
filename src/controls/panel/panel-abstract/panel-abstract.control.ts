import { ControlAbstract } from "../../control-abstract.control";
import { ControlParams } from "../../control.model";

export abstract class PanelAbstractControl extends ControlAbstract {
    abstract element: HTMLDivElement;

    
    constructor(params: ControlParams, callback: Function, args: unknown) {
        super();
    }
}