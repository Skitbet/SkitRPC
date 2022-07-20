const { clientId } = require('./config.json')
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' })

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Hewo! I'm Skitbet`,
        state: `I cod- I mean break shit`,
        startTimestamp: Date.now(),
        largeImageKey: `wink`,
        largeImageText: `Im a furry ha you mad`,
        instance: false,
        buttons: [
            {
                label: `My Github`,
                url: `https://github.com/skitbet`
            }
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