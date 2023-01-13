import { ConsoleLogAction } from "./actions/console-log.action";
import { Button } from "./controls/buttons/button/button";
import { ButtonIcons } from "./controls/buttons/button.model";
import { ElementFind, GetElementCollection } from "./element-find/element-find";
import { RenderAt } from "./render/render.fabric";
import { ElementCollection } from "./element-find/element-collection";
import { ThreeDotsButton } from "./controls/buttons/three-dots-button/three-dots-button";

export function addButtons() {
    // create button
    const addButtonAddAll = new ThreeDotsButton({
            id: "vk-im-resposts-filter-add-button-threedots",
            tag: "a",
            classes: ["ui_actions_menu_item", "im-action", "im-action_search", "_im_action"],
            attributes: { "tabindex": "0", "role": "link"},
            icon: ButtonIcons.none,
            text: "Поиск репостов",
        },
        ConsoleLogAction.prototype.log,
        {}).element;

    // find place for button
    const elementData = GetElementCollection.get(ElementCollection.IMDialogToolBarMoreActionsPanel)!;
    const insertBeforeData = GetElementCollection.get(ElementCollection.IMDialogToolBarMoreActionsPanelSecondButton)!;
    if (elementData) {
        const element = new ElementFind().getSingle(elementData);
        const insertBeforeElem = new ElementFind().getSingle(insertBeforeData);
        // render button
        new RenderAt().render(addButtonAddAll, element, insertBeforeElem);
    }
}