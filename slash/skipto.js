const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("skipto").setDescription("Skips to a certain track #")
  .addNumberOption((option) =>
  option.setName("tracknumber").setDescription("The track to skip to").setMinValue(1).setRequired(true)),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return interaction.editReply("Não tem músicas na fila...")

    const trackNum = interaction.options.getNumber("tracknumber")

    if (trackNum > queue.tracks.length) return interaction.editReply("Número da música inválido")

		queue.skipTo(trackNum - 1)

    await interaction.editReply(`Pulou para a música número ${trackNum}`)
	},
}
