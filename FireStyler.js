const net = require('net');

// Function to send commands to FreeStyler
function sendFreeStylerCommand(command) {
    return new Promise((resolve, reject) => {
        const client = new net.Socket();
        
        // Configure connection details
        const host = '127.0.0.1'; // localhost
        const port = 3332; // FreeStyler port (You may need to change to 3333)
        
        // Connect to FreeStyler
        client.connect(port, host, () => {
            console.log('Connected to FreeStyler');
            
            // Send command
            client.write(command);
        });
        
        // Handle data from FreeStyler
        client.on('data', (data) => {
            console.log('Received from FreeStyler:', data.toString());
            client.end(); // Close the connection
            resolve(); // Resolve the promise
        });
        
        // Handle connection close
        client.on('close', () => {
            console.log('Connection to FreeStyler closed');
        });
        
        // Handle connection errors
        client.on('error', (err) => {
            console.error('Error connecting to FreeStyler:', err.message);
            reject(err); // Reject the promise
        });
    });
}

// Function to run the script
exports.run = (runRequest) => {
    const logger = runRequest.modules.logger;
    const parameters = runRequest.parameters;

    const selectedSequence = parameters.sequence || 1;
    let command;

    switch (selectedSequence) {
        case 1:
            command = 'FSOC046255'; // Sequence 1
            break;
        case 2:
            command = 'FSOC047255'; // Sequence 2
            break;
        case 3:
            command = 'FSOC048255'; // Sequence 3
            break;
        case 4:
            command = 'FSOC049255'; // Sequence 4
            break;
        case 5:
            command = 'FSOC050255'; // Sequence 5
            break;
        case 6:
            command = 'FSOC051255'; // Sequence 6
            break;
        case 7:
            command = 'FSOC052255'; // Sequence 7
            break;
        case 8:
            command = 'FSOC053255'; // Sequence 8
            break;
        case 9:
            command = 'FSOC054255'; // Sequence 9
            break;
        case 10:
            command = 'FSOC055255'; // Sequence 10
            break;
        case 11:
            command = 'FSOC056255'; // Sequence 11
            break;
        case 12:
            command = 'FSOC057255'; // Sequence 12
            break;
        case 13:
            command = 'FSOC058255'; // Sequence 13
            break;
        case 14:
            command = 'FSOC059255'; // Sequence 14
            break;
        case 15:
            command = 'FSOC060255'; // Sequence 15
            break;
        case 16:
            command = 'FSOC061255'; // Sequence 16
            break;
        case 17:
            command = 'FSOC062255'; // Sequence 17
            break;
        case 18:
            command = 'FSOC063255'; // Sequence 18
            break;
        case 19:
            command = 'FSOC064255'; // Sequence 19
            break;
        case 20:
            command = 'FSOC065255'; // Sequence 20
            break;
        default:
            logger.error('Invalid sequence number.');
            return;
    }

    // Send command to FreeStyler
    sendFreeStylerCommand(command)
        .then(() => {
            logger.info('Command sent to FreeStyler successfully');
        })
        .catch((err) => {
            logger.error('Failed to send command to FreeStyler:', err.message);
        });
};

// Function to define parameters
exports.getDefaultParameters = () => {
    return new Promise((resolve, reject) => {
        const sequenceOptions = Array.from({ length: 20 }, (_, i) => i + 1); // Array of sequence numbers from 1 to 20
        resolve({
            "sequence": {
                "type": "enum",
                "description": "Select the sequence to toggle:",
                "options": sequenceOptions
            }
        });
    });
};

// Define script manifest
exports.getScriptManifest = () => ({
    name: "FreeStyler Sequence Toggler",
    description: "Toggle sequences on FreeStyler lighting software.",
    author: "Your Name",
    version: "1.0",
    firebotVersion: "5"
});
