import { ButtonChevronControl } from "../controls/buttons/button-chevron/button.control";
import { ButtonFlat } from "../controls/buttons/button-flat/button-flat.control";
import { ButtonIcons } from "../controls/buttons/button.model";
import { ControlBase } from "../controls/control-base.control";
import { CounterControl } from "../controls/counter/counter/counter.control";
import { ElementCollection } from "../element-find/element-collection";
import { GetElementCollection, ElementFind } from "../element-find/element-find";
import { elementShouldExistGuard } from "../guards/element-existence.guard";
import { RenderAt } from "../render/render.fabric";
import { ActionAbstract } from "./action-abstract.action";
import { ConsoleLogAction } from "./console-log.action";
import { GetMessagesAction } from "./get-messages.action";
import { PanelPlaceAction } from "./panel-place.action";

export class PanelSetStateAction implements ActionAbstract {
    @elementShouldExistGuard(GetElementCollection.get(ElementCollection.IMDialogContainerFilterPanel)!.selector)
    public run(state: "loading" | "search") {
        this.clearContainer();
        this.renderState(state);
    }

    private clearContainer() {
        const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogContainerFilterPanelContainer);
        element.innerHTML = ``;
    }

    private renderState(state: "loading" | "search") {
        switch (state) {
            case "loading": 
                    renderLoadingState();
                break;
                
                case "search":
                    renderSearchButton();
                    renderCounter();
                    renderArrow("up");
                    renderArrow("down");
                break;
            default:
                break;
        }

        function renderSearchButton() {
            const addSearchButton = new ButtonFlat({
                id: "vk-im-resposts-filter-search-button",
                tag: "div",
                classes: ["addpost_button_wrap"],
                icon: ButtonIcons.none,
                html: `<button class="FlatButton FlatButton--secondary FlatButton--size-m addpost_button" type="button">
    <span class="FlatButton__in">
        <span class="FlatButton__content">Найти репосты</span>
    </span>
</button>`,
            },
                GetMessagesAction.prototype.run,
                {}).element;

            const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogContainerFilterPanelContainer);
            // render button
            new RenderAt().render(addSearchButton, element);
        }
        function renderCounter() {
            const addCounter = new CounterControl({
                id: "vk-im-resposts-counter",
                tag: "div",
                classes: ["addpost_button_wrap"],
                styles: [{
                    key: "margin-left",
                    value: "20px"
                }],
                html: `Количество репостов: <span></span>`
            }).element;

            const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogContainerFilterPanelContainer);
            // render button
            new RenderAt().render(addCounter, element);
        }
        function renderArrow(mode: "up" | "down"): void {
            const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogContainerFilterPanelContainer);

            const arrowElement = new ButtonChevronControl({
                id: `vk-im-resposts-filter-arrow-${mode}`,
                tag: "span",
                classes: ["ui_rmenu_item_dropdown"],
                icon: ButtonIcons.none,
                styles: [{
                    key: "cursor",
                    value: "pointer"
                }],
                html: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 16 12"><path fill="currentColor" d="M4.45 3.7a.9.9 0 0 0-1.1 1.4l4.1 3.21a.9.9 0 0 0 1.1 0l4.1-3.2a.9.9 0 1 0-1.1-1.42L8 6.46 4.45 3.7Z"></path></svg>`,
                mode
            },
                GetMessagesAction.navigateMessages,
                mode).element;

            new RenderAt().render(arrowElement, element);
        };

        function renderLoadingState() {
            const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogContainerFilterPanelContainer);

            const loadingElement = new ControlBase({
                id: "vk-im-resposts-filter-loading",
                tag: "div",
                classes: ["pr", "videoplayer_waiting", "pr_big"],
                html: `<div class="pr_bt"></div><div class="pr_bt"></div><div class="pr_bt"></div>`,
            }).element;

            new RenderAt().render(loadingElement, element);
            return element;
        }
    }
}