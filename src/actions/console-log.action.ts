import { Logger } from "../utils/logger";

export class ConsoleLogAction {
    public log(): void {
        Logger.log("ConsoleLogAction!");
    }
}