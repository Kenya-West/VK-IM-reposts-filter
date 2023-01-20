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
                ConsoleLogAction.prototype.log,
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