import { ButtonBase } from "../button-base/button-base";
import { ButtonParams } from "../button.model";

export class ButtonFlat extends ButtonBase<HTMLDivElement> {
    constructor(params: ButtonParams, callback: Function, args: unknown) {
        super(params, callback, args);
    }
}