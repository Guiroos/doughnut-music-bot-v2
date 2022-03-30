const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Pauses the music"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return interaction.editReply("Não tem músicas na fila...")

		queue.setPaused(true)
    await interaction.editReply("Música pausada! Use '/resume' para voltar a tocar")
	},
}
