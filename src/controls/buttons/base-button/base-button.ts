import { AbstractButton } from "../abstract-button/abstract-button";
import { ButtonParams } from "../button.model";

export abstract class BaseButton implements AbstractButton {
    public element: HTMLElement;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
        this.element = this.createElement(params.tag ?? "button");
        this.setInnerText(params.text);
        this.setClasses(params.classes);
        if (params.attributes) this.setAttributes(params.attributes);
        if (params.styles) this.setStyles(params.styles);
        if (params.id) this.setId(params.id);
        this.addEventListener(this.element, callback, args);
    }

    public createElement(element: string): HTMLElement {
        return document.createElement(element);
    };
    public setInnerText(text: string = "Ошибка: текст не был назначен"): void {
        // set innerHTML in button
        this.element.innerHTML = text;
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
    public addEventListener(button: HTMLElement | HTMLButtonElement | HTMLDivElement, callback: Function, args: unknown): void {
        button.addEventListener("click", callback.bind(this, args), false);
    };
}