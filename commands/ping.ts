import { InteractionBase } from "../structures/InteractionBase";
import { type AnyTextableChannel, type CommandInteraction, ApplicationCommandType } from "touchguild";
import type { ExtendedClient } from "../structures/ExtendedClient";

export default class ping extends InteractionBase {
    constructor(client: ExtendedClient) {
        super(client,{
            name: "ping",
            type: ApplicationCommandType.CHAT_INPUT
        });
    }

    override async run(interaction: CommandInteraction<AnyTextableChannel>): Promise<void>  {
        void interaction.createMessage({ content: "pong!" });
    }
}
