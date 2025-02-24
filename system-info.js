
const os = require('os');
const process = require('process');


console.log('--- System Information ---');
console.log(`Operating System: ${os.type()} ${os.release()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Free Memory: ${(os.freemem() / 1e6).toFixed(2)} GB`);
console.log(`Total Memory: ${(os.totalmem() / 1e6).toFixed(2)} GB`);
console.log(`Home Directory: ${os.homedir()}`);


console.log('\n--- Node.js & Process Information ---');
console.log(`Node.js Version: ${process.version}`);
console.log(`Process ID: ${process.pid}`);
console.log(`Current Directory: ${process.cwd()}`);
console.log(`Platform: ${process.platform}`);


console.log('\nSystem info script completed successfully.');
