import { routeGuardExact, routeGuardIncludes } from "./guards/route.guard";
import { elementShouldNotExistGuard, elementShouldExistGuard } from "./guards/element-existence.guard";
import { Routes } from "./routing/routes";
import { GetElementCollection } from "./element-find/element-find";
import { ElementCollection } from "./element-find/element-collection";
import { addButtons } from "./app.facade";

export class App {
    constructor() {
        console.log("Скрипт инициализирован!");
    }

    @routeGuardIncludes(Routes.IMSelected)
    @elementShouldNotExistGuard(GetElementCollection.get(ElementCollection.IMDialogToolBarMoreActionsPanelRepostsFilterButton)!.selector)
    @elementShouldExistGuard(GetElementCollection.get(ElementCollection.IMDialogToolBarMoreActionsPanel)?.selector)
    public addButtons(): void {
        console.log("addButtons запущен!");
        addButtons();
    }
}