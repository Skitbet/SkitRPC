const { clientId } = require('./config.json')
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' })

DiscordRPC.register(clientId);

const startTimestamp = new Date();

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Hewo! I'm Skitbet`,
        state: `I cod- I mean break shit`,
        startTimestamp,
        largeImageKey: `wink`,
        largeImageText: `Im a furry ha you mad`,
        instance: false,
        buttons: [
			{ "label": "Github", "url": "https://github.com/Skitbet" }
        ]
    });
};

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
});


RPC.login({ clientId }).catch(err => console.error(err));