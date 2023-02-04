const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("hello").setDescription("Say hello!"),
  async execute(interaction) {
    await interaction.reply("Greetings!");
  },
};
