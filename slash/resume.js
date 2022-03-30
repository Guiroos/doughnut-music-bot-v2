const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("resume").setDescription("Resumes the music"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return interaction.editReply("Não tem músicas na fila")

		queue.setPaused(false)
    await interaction.editReply("Música despausada! Use '/pause' pausar a música")
	},
}
