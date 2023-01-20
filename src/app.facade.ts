import { ButtonIcons } from "./controls/buttons/button.model";
import { ElementFind } from "./element-find/element-find";
import { RenderAt } from "./render/render.fabric";
import { ElementCollection } from "./element-find/element-collection";
import { ThreeDotsButton } from "./controls/buttons/three-dots-button/three-dots-button.control";
import { PanelPlaceAction } from "./actions/panel-place.action";

export function addButtons() {
    addThreeDotsButton();

    function addThreeDotsButton() {
        const addSearchButton = new ThreeDotsButton({
            id: "vk-im-resposts-filter-add-button-threedots",
            tag: "a",
            classes: ["ui_actions_menu_item", "im-action", "im-action_search", "_im_action"],
            attributes: { "tabindex": "0", "role": "link" },
            icon: ButtonIcons.none,
            text: "Поиск репостов",
        },
        PanelPlaceAction.prototype.run,
        {}).element;

        const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogToolBarMoreActionsPanel);
        const insertBeforeElem = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogToolBarMoreActionsPanelSecondButton);
        // render button
        new RenderAt().render(addSearchButton, element, insertBeforeElem);
    }
}