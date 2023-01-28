import { ElementCollection } from "../element-find/element-collection";
import { ElementFind, GetElementCollection } from "../element-find/element-find";
import { elementShouldExistGuard } from "../guards/element-existence.guard";
import { RenderAt } from "../render/render.fabric";
import { ActionAbstract } from "./action-abstract.action";
import { GetMessagesAction } from "./get-messages.action";

export class ClosePanelAction implements ActionAbstract {
    @elementShouldExistGuard(GetElementCollection.get(ElementCollection.IMDialogContainerFilterPanel)!.selector)
    public run(): void {
        const element = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogContainerFilterPanel);
        new RenderAt().remove(element);
        GetMessagesAction.resetState(true);
    }

}