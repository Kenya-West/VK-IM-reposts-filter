import { ButtonParams } from "../button.model";
import { ButtonBase } from "../button-base/button-base.control";

export class Button extends ButtonBase<HTMLDivElement> {
    constructor(params: ButtonParams, callback: Function, args: unknown) {
        super(params, callback, args);
    }
}
