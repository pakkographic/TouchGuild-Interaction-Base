import { InteractionBase } from "../structures/InteractionBase";
import { type AnyTextableChannel, type CommandInteraction, ApplicationCommandType } from "touchguild";
import type { ExtendedClient } from "../structures/ExtendedClient";

export default class hello extends InteractionBase {
    constructor(client: ExtendedClient) {
        super(client,{
            name: "hello",
            type: ApplicationCommandType.CHAT_INPUT
        });
    }

    override async run(interaction: CommandInteraction<AnyTextableChannel>): Promise<void>  {
        await interaction.createMessage({ content: "hi!" });
        await interaction.createFollowup({ content: "hello!" });
    }
}
