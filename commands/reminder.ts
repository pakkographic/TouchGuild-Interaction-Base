import { InteractionBase } from "../structures/InteractionBase";
import {
    type AnyTextableChannel,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    type CommandInteraction
} from "touchguild";
import type { ExtendedClient } from "../structures/ExtendedClient";

export default class reminder extends InteractionBase {
    constructor(client: ExtendedClient) {
        super(client, {
            name:    "reminder",
            type:    ApplicationCommandType.CHAT_INPUT,
            options: [
                {
                    type:     ApplicationCommandOptionType.INTEGER,
                    name:     "minutes",
                    required: true
                },
                {
                    type:     ApplicationCommandOptionType.STRING,
                    name:     "message",
                    required: false
                },
            ]
        });
    }

    override async run(interaction: CommandInteraction<AnyTextableChannel>): Promise<void>  {
        const minutes = interaction.data.options.getIntegerOption("minutes", true).value;
        const message = interaction.data.options.getStringOption("message")?.value;

        const minutesMs = minutes * 60000;

        setTimeout(() => {
            interaction.createMessage({ content: message ?? "Hello (default message)!" });
        }, minutesMs);
    }
}
