import { ButtonBase } from "../button-base/button-base.control";
import { ButtonParams } from "../button.model";

export class ThreeDotsButton extends ButtonBase<HTMLDivElement> {
    constructor(params: ButtonParams, callback: Function, args: unknown) {
        super(params, callback, args);
    }

    public setInnerHTML(): void {
        this.element.innerHTML = ``;
    }
}