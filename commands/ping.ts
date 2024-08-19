import { InteractionBase } from "../structures/InteractionBase";
import { type AnyTextableChannel, type CommandInteraction, ApplicationCommandType, type Client } from "touchguild";

export default class ping extends InteractionBase {
    constructor(client: Client) {
        super(client,{
            name: "ping",
            type: ApplicationCommandType.CHAT_INPUT
        });
    }

    override async run(interaction: CommandInteraction<AnyTextableChannel>): Promise<void>  {
        void interaction.createMessage({ content: "pong!" });
    }
}
