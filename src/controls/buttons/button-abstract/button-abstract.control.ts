import { ControlAbstract } from "../../control-abstract.control";
import { ButtonParams } from "../button.model";

type ButtonElementType = HTMLElement | HTMLButtonElement | HTMLDivElement;

export abstract class ButtonAbstract extends ControlAbstract {
    abstract element: ButtonElementType;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
        super();
    }

    abstract addEventListener(button: ButtonElementType, callback: Function, args: unknown): void;
}