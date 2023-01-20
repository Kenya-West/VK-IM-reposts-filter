import { ControlBase } from "../../control-base.control";
import { ControlParams } from "../../control.model";
import { PanelAbstractControl } from "../panel-abstract/panel-abstract.control";

export abstract class PanelBaseControl implements PanelAbstractControl, ControlBase {
    public element: HTMLDivElement;

    constructor(params: ControlParams) {
        this.element = this.createElement(params.tag ?? "div");
        if (params.html) this.setInnerHtml(params.html);
        if (params.classes) this.setClasses(params.classes);
        if (params.attributes) this.setAttributes(params.attributes);
        if (params.styles) this.setStyles(params.styles);
        if (params.id) this.setId(params.id);
    }

    public createElement<T>(element: string): T {
        return document.createElement(element) as unknown as T;
    };
    public setInnerText(text: string = "Ошибка: текст не был назначен"): void {
        // set innerHTML in button
        this.element.innerText = text;
    };
    public setInnerHtml(html: string = "Ошибка: HTML-разметка не была назначена"): void {
        // set innerHTML in button
        this.element.innerHTML = html;
    };
    public setId(id: string): void {
        if (id) {
            this.element.id = id
        }
    };
    public setClasses(classes: string[]): void {
        classes.forEach(element => {
            this.element.classList.add(element)
        });
    };

    public setAttributes(attributes: Record<string, string>): void {
        Object.entries(attributes).forEach(([key, value]) => { this.element.setAttribute(key, value); });
    };
    public setStyles(styles: { selector?: string; key: string; value: string }[]): void {
        styles?.forEach((style) => {
            if (style.selector) {
                (this.element.querySelector(style.selector) as HTMLDivElement | HTMLButtonElement).style.setProperty(style.key, style.value);
            } else {
                this.element.style.setProperty(style.key, style.value);
            }
        });
    }
}