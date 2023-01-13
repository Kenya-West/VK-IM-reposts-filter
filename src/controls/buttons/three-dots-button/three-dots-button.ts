import { BaseButton } from "../base-button/base-button";
import { ButtonParams } from "../button.model";

export class ThreeDotsButton extends BaseButton {
    constructor(params: ButtonParams, callback: Function, args: unknown) {
        super(params, callback, args);
    }

    public setInnerHTML(): void {
        this.element.innerHTML = ``;
    }
}