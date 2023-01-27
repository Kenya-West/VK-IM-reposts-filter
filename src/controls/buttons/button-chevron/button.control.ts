import { ButtonControlParams } from "../button.model";
import { ButtonBaseControl } from "../button-base/button-base.control";

interface ButtonChevronParams extends ButtonControlParams {
    mode: "up" | "down";
}

export class ButtonChevronControl extends ButtonBaseControl {
    constructor(params: ButtonChevronParams, callback: Function, args: unknown) {
        super(params, callback, args);

        params.mode === "up" ? this.element.style.setProperty("transform", "rotate(180deg)") : null;
    }
}
