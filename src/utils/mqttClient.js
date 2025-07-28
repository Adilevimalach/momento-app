import mqtt from 'mqtt';


const WEBSOCKET_URL = 'wss://1e4167c248dc45649df413378048a18f.s1.eu.hivemq.cloud:8884/mqtt';
const USERNAME = 'adilevi9802';
const PASSWORD = '312230667AdiLM';

const options = {
  username: USERNAME,
  password: PASSWORD,
  clientId: undefined, 
  protocolVersion: 5 
};


console.log('Creating MQTT client...');
const client = mqtt.connect(WEBSOCKET_URL, options);

client.on('connect', () => {
  console.log('✅ MQTT Client connected successfully!');
});

client.on('error', (err) => {
  console.error('MQTT Client connection error:', err);
  client.end();
});


export default client;