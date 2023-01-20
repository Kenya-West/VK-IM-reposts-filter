import { ElementAbstract } from "../../element-abstract";
import { ButtonParams } from "../button.model";

type ButtonElementType = HTMLElement | HTMLButtonElement | HTMLDivElement;

export abstract class ButtonAbstract extends ElementAbstract {
    abstract element: ButtonElementType;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
        super();
    }

    abstract addEventListener(button: ButtonElementType, callback: Function, args: unknown): void;
}