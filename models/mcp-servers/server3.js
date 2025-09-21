
const MCP = require('mcp-sdk');

const server3 = new MCP.Server({
    name: 'Server3',
    tasks: ['task5', 'task6'],
});

server3.start(() => {
    console.log('Server 3 is running');
});

module.exports = server3;