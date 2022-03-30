const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("quit").setDescription("Stops the bot and clears the queue"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return interaction.editReply("Não tem músicas na fila...")

		queue.destroy()
    await interaction.editReply("Falo rapeize :call_me:")
	},
}
