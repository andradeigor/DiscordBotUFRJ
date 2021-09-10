const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const execute = async (message) => {
  try {
    message.channel.startTyping();

    const member =  message.member|| message.mentions.members.first();
    const { user } = member;
    const userImage = await Jimp.read(user.displayAvatarURL({ format: 'png' }));
    const userName = user.username;

    const supremacyTemplate = await Jimp.read(path.join(__dirname, '../asset/supremacy-template.jpg'));
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);

    userImage.resize(250, 250);
    supremacyTemplate.print(font, 50, 150, userName);
    supremacyTemplate.composite(userImage, 50, 250, {
      mode: Jimp.BLEND_SOURCE_OVER,
    });

    const supremacyPath = './asset/supremacyUser.png';

    await supremacyTemplate.writeAsync(supremacyPath);

    await message.channel.send(`:place_of_worship: ${userName} supremacy apenas.`, {
      files: [supremacyPath],
    });

    fs.unlinkSync(supremacyPath);
  } catch (error) {
    console.log(error);
  } finally {
    message.channel.stopTyping();
  }
};

module.exports = {
  name: 'supremacy',
  description: 'Apoteose à pessoa marcada',
  execute,
};
