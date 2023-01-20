import { ElementAbstract } from "../../element-abstract";
import { ElementParams } from "../../element.model";

export abstract class PanelAbstract extends ElementAbstract {
    abstract element: HTMLDivElement;

    
    constructor(params: ElementParams, callback: Function, args: unknown) {
        super();
    }
}