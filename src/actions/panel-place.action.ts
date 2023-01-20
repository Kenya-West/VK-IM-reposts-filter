import { ButtonIcons } from "../controls/buttons/button.model";
import { Button } from "../controls/buttons/button/button.control";
import { Panel } from "../controls/panel/panel/panel.control";
import { ElementCollection } from "../element-find/element-collection";
import { GetElementCollection, ElementFind } from "../element-find/element-find";
import { elementShouldNotExistGuard } from "../guards/element-existence.guard";
import { RenderAt } from "../render/render.fabric";
import { ActionAbstract } from "./action-abstract.action";
import { ClosePanelAction } from "./panel-close.action";
import { PanelSetStateAction } from "./panel-set-state.action";

export class PanelPlaceAction implements ActionAbstract {
    @elementShouldNotExistGuard(GetElementCollection.get(ElementCollection.IMDialogContainerFilterPanel)!.selector)
    public run(): void {
        addPanel();
        addClosebutton();
        PanelSetStateAction.prototype.run("search");

        function addPanel() {
            const addPanel = new Panel({
                id: "vk-im-resposts-filter-panel",
                tag: "div",
                classes: ["im-page--toolsw"],
                styles: [
                    {
                        key: "display",
                        value: "flex"
                    },
                    {
                        key: "flex-direction",
                        value: "row"
                    }
                ],
                html: `<div class="vk-im-resposts-filter-panel-container" style="display: flex; width: 100%; justify-content: center; align-items: center;"></div>`
            }).element;

            const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogChatHeaderIn);
            const insertBeforeElem = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogToolBarPinnedMessages);
            // render button
            new RenderAt().render(addPanel, element, insertBeforeElem);
        }

        function addClosebutton() {
            const addClosePanelButton = new Button({
                id: "vk-im-resposts-filter-close=panel-button",
                tag: "button",
                classes: ["im-page-pinned--hide"],
                icon: ButtonIcons.none,
                text: "",
            },
            ClosePanelAction.prototype.run,
            {}).element;
    
            const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogContainerFilterPanel);
            // render button
            new RenderAt().render(addClosePanelButton, element);
        }
    }

}