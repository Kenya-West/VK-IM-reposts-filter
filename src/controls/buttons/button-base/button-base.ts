import { ElementBase } from "../../element-base";
import { ButtonAbstract } from "../button-abstract/button-abstract";
import { ButtonParams } from "../button.model";

export abstract class ButtonBase<T extends HTMLElement> implements ButtonAbstract, ElementBase {
    public element: T;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
        this.element = this.createElement(params.tag ?? "button");
        if (params.classes) this.setClasses(params.classes);
        if (params.text) this.setInnerText(params.text);
        if (params.html) this.setInnerHtml(params.html);
        if (params.attributes) this.setAttributes(params.attributes);
        if (params.styles) this.setStyles(params.styles);
        if (params.id) this.setId(params.id);
        this.addEventListener(this.element, callback, args);
    }

    public createElement<T>(element: string): T {
        return document.createElement(element) as unknown as T;
    };
    public setInnerText(text: string = "Ошибка: текст не был назначен"): void {
        this.element.innerText = text;
    };
    public setInnerHtml(html: string = "Ошибка: HTML-разметка не была назначена"): void {
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
    public addEventListener(button: HTMLElement | HTMLButtonElement | HTMLDivElement, callback: Function, args: unknown): void {
        button.addEventListener("click", callback.bind(this, args), false);
    };
}