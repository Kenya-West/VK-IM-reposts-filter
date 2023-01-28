import { ElementCollection } from "../element-find/element-collection";
import { ElementFind, GetElementCollection } from "../element-find/element-find";
import { getVKId } from "../utils/get-vk-id.util";
import { ActionAbstract } from "./action-abstract.action";

export class GetMessagesAction implements ActionAbstract {
    public run(): void {
        GetMessagesAction.findMessages("add");
    }

    public static messages: HTMLElement[] = [];
    private static currentMessageIndex: number | undefined;
    // needed because if we got no new messages, we need to scroll to the top
    private static messagesDelta: number | undefined;

    public static navigateMessages(direction: "up" | "down"): void {
        GetMessagesAction.setMessageCount(GetMessagesAction.messages.length);
        if (GetMessagesAction.messages.length === 0) {
            GetMessagesAction.prototype.run();
        }

        switch (direction) {
            case "down":
                if (GetMessagesAction.currentMessageIndex === undefined) {
                    GetMessagesAction.currentMessageIndex = 0;
                    scrollToElem();
                } else {
                     if (GetMessagesAction.currentMessageIndex < GetMessagesAction.messages.length - 1) {
                        GetMessagesAction.currentMessageIndex++
                        scrollToElem();
                        // and if you scrolled to the bottom of the page, then scroll to the top
                    } else if (GetMessagesAction.currentMessageIndex === GetMessagesAction.messages.length - 1) {
                        GetMessagesAction.currentMessageIndex = 0;
                        scrollToElem();
                    };
                }
                break;
        
            case "up":
                if (GetMessagesAction.currentMessageIndex === undefined) {
                    GetMessagesAction.currentMessageIndex = GetMessagesAction.messages.length - 1;
                    scrollToElem();
                } else {
                    if (GetMessagesAction.currentMessageIndex > 0) {
                        GetMessagesAction.currentMessageIndex--
                        scrollToElem();
                    }    
                    // and if you scrolled to the top of the page and no new messages were added, then scroll to the bottom
                    // else if (GetMessagesAction.currentMessageIndex === 0) {
                    //     GetMessagesAction.currentMessageIndex = GetMessagesAction.messages.length - 1;
                    //     scrollToElem();
                    // };
                }
                break;
        
            default:
                break;
        }

        function scrollToElem() {
            const element = GetMessagesAction.messages[GetMessagesAction.currentMessageIndex!];
            // check if element is still alive in DOM
            if (element.isConnected) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                GetMessagesAction.resetState();
            };
        }

        // after `currentMessageIndex` has been updated, do the stuff with scrolling
        if (GetMessagesAction.currentMessageIndex! < 3) {
            GetMessagesAction.prototype.run();
            // if we got no new messages and reached the top, we need to scroll to the top
            if (GetMessagesAction.currentMessageIndex === 0 && GetMessagesAction.messagesDelta === 0) {
                new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogScrollableContainer).scrollTo({top: 0, left: 0, behavior: 'smooth'})
            }
        }
    }
    
    public static setMessageCount(count: number): void {
        const counterElement = new ElementFind().getElementByElementIdSingle(ElementCollection.IMDialogContainerFilterPanelContainerCounter);

        if (count === 0) {
            counterElement.innerText = `Репостов не найдено`;
        } else {
            counterElement.innerText = `Количество репостов: ${count}`;
        }
    }

    public static resetState(keepMessageSearch?: boolean): void {
        if (!keepMessageSearch) {
            GetMessagesAction.messages = [];
            GetMessagesAction.currentMessageIndex = undefined;
            GetMessagesAction.messagesDelta = undefined;
            GetMessagesAction.setMessageCount(0);
        } else {
            GetMessagesAction.unmarkMessages(GetMessagesAction.messages);
        };
    }

    public static restoreState(): void {
        if (GetMessagesAction.messages.length !== 0) {
            GetMessagesAction.findMessages("new");
        }
    }

    private static markMessagesAsFound(messages: HTMLElement[]): void {
        messages.forEach(message => {
            message.classList.add("vk-im-resposts-found");
        });
    }
    private static unmarkMessages(messages: HTMLElement[]): void {
        messages.forEach(message => {
            message.classList.contains("vk-im-resposts-found") && message.classList.remove("vk-im-resposts-found");
        });
    }

    private static findMessages(mode: "new" | "add") {
        if (mode === "add") {
            const baseSelector = GetElementCollection.get(ElementCollection.IMDialogMessagesOnlyPictures)!.selector;
            // Extract :not selector to new one pre-defined
            const messages = new ElementFind().getElementByQueryMultiple(`.im-mess-stack[data-peer="${getVKId()}"] ${baseSelector}:not(.vk-im-resposts-found)`);
            const completeLength = GetMessagesAction.messages.unshift(...messages);
            GetMessagesAction.messagesDelta = messages.length;
            if (GetMessagesAction.currentMessageIndex !== undefined) GetMessagesAction.currentMessageIndex += messages.length;
            GetMessagesAction.markMessagesAsFound(GetMessagesAction.messages);
            GetMessagesAction.setMessageCount(completeLength);
        } else {
            const baseSelector = GetElementCollection.get(ElementCollection.IMDialogMessagesOnlyPictures)!.selector;
            // Extract :not selector to new one pre-defined
            const messages = new ElementFind().getElementByQueryMultiple(`.im-mess-stack[data-peer="${getVKId()}"] ${baseSelector}:not(.vk-im-resposts-found)`);
            GetMessagesAction.messagesDelta = messages.length;
            if (GetMessagesAction.currentMessageIndex === undefined) GetMessagesAction.currentMessageIndex = 0;
            GetMessagesAction.markMessagesAsFound(GetMessagesAction.messages);
            GetMessagesAction.setMessageCount(messages.length);       
        }
    }
}