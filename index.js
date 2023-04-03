require('dotenv').config();
const { App } = require('@slack/bolt');
const config = require('./config');

const port = process.env.PORT || 8080;

const app = new App({
  token: config.bot.botToken,
  appToken: config.bot.slackApptoken,
  socketMode: true,
  installerOptions: {
    port,
  },
  customRoutes: [
    {
      path: '/',
      method: ['GET'],
      handler: (req, res) => {
        res.writeHead(200);
        res.end('Health check!');
      },
    },
  ],
});

// When a user joins the team, send a message in a predefined channel asking them to introduce themselves
app.event('message', async ({ event, logger }) => {
  try {
    console.log(event);
    // Call chat.postMessage with the built-in client
    // const result = await client.chat.postMessage({
    //   channel: welcomeChannelId,
    //   text: `Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`
    // });
    // logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
});

(async () => {
  await app.start();
  console.log('⚡️ Bolt app started');

  // Listens to incoming messages that contain "hello"
  app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
  });
})();
