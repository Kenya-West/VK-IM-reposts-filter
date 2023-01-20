import { ElementCollectionModel } from "./element-find";


export enum ElementCollection {
    // stock elements
    Root,
    LeftColumnAlbums,
    IM,
    IMDialog,
    IMDialogList,
    IMDialogHeader,
    IMDialogHeaderTitle,
    IMDialogContainer,
    IMDialogChatHeaderIn,
    IMDialogToolBar,
    IMDialogToolBarPinnedMessages,
    IMDialogToolBarMoreActionsPanel,
    IMDialogToolBarMoreActionsPanelSearchButton,
    IMDialogToolBarMoreActionsPanelSecondButton,
    IMDialogBody,
    IMDialogMessageStacks,
    IMDialogMessages,
    IMDialogMessagesOnlyPictures,
    IMDialogMessagesOnlyPicturesContent,
    // our own elements
    IMDialogContainerFilterPanel,
    IMDialogContainerFilterPanelContainer,
    IMDialogToolBarMoreActionsPanelRepostsFilterButton,
}

export const elementCollectionList: ElementCollectionModel[] =
[
    {
        id: ElementCollection.Root,
        selector: "#content",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.LeftColumnAlbums,
        selector: "#l_ph > a[href]",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IM,
        selector: "#content > div > div",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogList,
        selector: "#content > div > div > .im-page--dialogs._im_page_dialogs.page_block",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogHeader,
        selector: "#content > div > div > .im-page--history > .im-page-history-w > .im-page--chat-header._im_dialog_actions > div > .im-page--toolsw > .im-page--title-wrapper",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogHeaderTitle,
        selector: "#content > div > div > .im-page--history > .im-page-history-w > .im-page--chat-header._im_dialog_actions > div > .im-page--toolsw > .im-page--title-wrapper > div > span.im-page--title-main > span",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogContainer,
        selector: "#content > div > div > .im-page--history > .im-page-history-w",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogChatHeaderIn,
        selector: "#content > div > div > div.im-page--history.page_block._im_page_history > div.im-page-history-w .im-page--chat-header-in",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogToolBar,
        selector: "#content > div > div > div.im-page--history.page_block._im_page_history > div.im-page-history-w .im-page--toolsw",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogToolBarPinnedMessages,
        selector: "#content > div > div > .im-page--history > .im-page-history-w > .im-page--chat-header > .im-page--chat-header-in > .im-page--pinned",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogToolBarMoreActionsPanel,
        selector: "#content > div > div > div.im-page--history.page_block._im_page_history > div.im-page-history-w .im-page--toolsw .im-page--header-more .ui_actions_menu",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogToolBarMoreActionsPanelSearchButton,
        selector: "#content > div > div > div.im-page--history.page_block._im_page_history > div.im-page-history-w .im-page--toolsw .im-page--header-more .ui_actions_menu > .ui_actions_menu_item:first-child",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogToolBarMoreActionsPanelSecondButton,
        selector: "#content > div > div > div.im-page--history.page_block._im_page_history > div.im-page-history-w .im-page--toolsw .im-page--header-more .ui_actions_menu > .ui_actions_menu_item:nth-child(2)",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogContainerFilterPanel,
        selector: "#vk-im-resposts-filter-panel",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogContainerFilterPanelContainer,
        selector: "#vk-im-resposts-filter-panel > .vk-im-resposts-filter-panel-container",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogToolBarMoreActionsPanelRepostsFilterButton,
        selector: "#content > div > div > div.im-page--history.page_block._im_page_history > div.im-page-history-w .im-page--toolsw .im-page--header-more .ui_actions_menu #vk-im-resposts-filter-add-button-threedots",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogBody,
        selector: "#content > div > div > .im-page--history > .im-page-history-w > .im-page--chat-body",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.IMDialogMessageStacks,
        selector: "#content > div > div > .im-page--history > .im-page-history-w > .im-page--chat-body .im-mess-stack",
        preferredMode: "selectMultiple"
    },
    {
        id: ElementCollection.IMDialogMessages,
        selector: "#content > div > div > .im-page--history > .im-page-history-w > .im-page--chat-body .im-mess-stack .im-mess",
        preferredMode: "selectMultiple"
    },
    {
        id: ElementCollection.IMDialogMessagesOnlyPictures,
        selector: ".im-mess:has(.page_post_sized_thumbs):not(:has(.post,.im-replied,.im_msg_media_link,.im-videomessage))",
        preferredMode: "selectMultiple"
    },
    {
        id: ElementCollection.IMDialogMessagesOnlyPicturesContent,
        selector: ".im-mess .im-mess--text:has(.page_post_sized_thumbs):not(:has(.post,.im-replied,.im_msg_media_link,.im-videomessage))",
        preferredMode: "selectMultiple"
    },
]