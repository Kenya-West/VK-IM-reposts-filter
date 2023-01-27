import { routeGuardExact, routeGuardIncludes } from "./guards/route.guard";
import { elementShouldNotExistGuard, elementShouldExistGuard } from "./guards/element-existence.guard";
import { Routes } from "./routing/routes";
import { GetElementCollection } from "./element-find/element-find";
import { ElementCollection } from "./element-find/element-collection";
import { addButtons, loadStyles } from "./app.facade";
import { checkUserscriptPermission } from "./guards/userscript-permissions.guard";
import { Logger } from "./utils/logger";

export class App {
    constructor() {
        Logger.log("Скрипт инициализирован!");
        this.initializeFeatures();
    }

    @routeGuardIncludes(Routes.IMSelected)
    @elementShouldNotExistGuard(GetElementCollection.get(ElementCollection.IMDialogToolBarMoreActionsPanelRepostsFilterButton)!.selector)
    @elementShouldExistGuard(GetElementCollection.get(ElementCollection.IMDialogToolBarMoreActionsPanel)?.selector)
    public renderElements(): void {
        Logger.log("addButtons запущен!");
        addButtons();
    }

    @checkUserscriptPermission("GM_addStyle")
    public initializeFeatures(): void {
        loadStyles();
    }
}