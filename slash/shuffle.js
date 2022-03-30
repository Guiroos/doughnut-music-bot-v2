const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("shuffle").setDescription("Shuffles the queue"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return interaction.editReply("Não tem músicas na fila...")

		queue.shuffle()
    await interaction.editReply(`A fila de ${queue.tracks.length} música foi embaralhada!`)
	},
}
