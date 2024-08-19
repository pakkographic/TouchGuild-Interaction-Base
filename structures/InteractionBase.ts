import type { ApplicationCommand, Client } from "touchguild";

export class InteractionBase {
    appCommand: ApplicationCommand;
    client: Client;
    constructor(client: Client, appCommand: ApplicationCommand) {
        this.client = client;
        this.appCommand = appCommand;
    }

    run(...args: Array<any>): void {
        return void new Error("Run command has been executed without being overridden.");
    }
}
