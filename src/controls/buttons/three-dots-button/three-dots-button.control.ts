import { ButtonBaseControl } from "../button-base/button-base.control";
import { ButtonControlParams } from "../button.model";

export class ThreeDotsButtonControl extends ButtonBaseControl<HTMLDivElement> {
    constructor(params: ButtonControlParams, callback: Function, args: unknown) {
        super(params, callback, args);
    }

    public setInnerHTML(): void {
        this.element.innerHTML = ``;
    }
}