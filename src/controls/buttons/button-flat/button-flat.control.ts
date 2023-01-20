import { ButtonBaseControl } from "../button-base/button-base.control";
import { ButtonControlParams } from "../button.model";

export class ButtonFlat extends ButtonBaseControl<HTMLDivElement> {
    constructor(params: ButtonControlParams, callback: Function, args: unknown) {
        super(params, callback, args);
    }
}