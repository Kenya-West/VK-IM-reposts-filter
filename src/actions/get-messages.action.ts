import { ElementCollection } from "../element-find/element-collection";
import { ElementFind } from "../element-find/element-find";
import { getVKId } from "../utils/get-vk-id.util";
import { ActionAbstract } from "./action-abstract.action";

export class GetMessagesAction implements ActionAbstract {
    public run(): void {
        const messages = new ElementFind().getElementByQuerySingle(`.im-mess-stack[data-peer="${getVKId()}"] ${ElementCollection.IMDialogMessagesOnlyPictures}`);
    }
}