import { InteractionBase } from "../structures/InteractionBase";
import {
    type AnyTextableChannel,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    type CommandInteraction
} from "touchguild";
import type { ExtendedClient } from "../structures/ExtendedClient";


export default class repeat extends InteractionBase {
    constructor(client: ExtendedClient) {
        super(client,{
            name:    "repeat",
            type:    ApplicationCommandType.CHAT_INPUT,
            options: [
                {
                    type:     ApplicationCommandOptionType.STRING,
                    name:     "text",
                    required: true
                }
            ]
        });
    }

    override async run(interaction: CommandInteraction<AnyTextableChannel>): Promise<void>  {
        const textInput = interaction.data.options.getStringOption("text");
        if (!textInput) return; // even if it should always be true as it is required, stay safe!
        await interaction.createMessage({ content: "your text input: " + textInput.value });
    }
}
