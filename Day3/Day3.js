// Problem 3: Execute Command
// Problem Statement: Create a function
// executeCommand(command) that takes a shell command as
// input and executes it using the child_process module.
// The function should print the output of the command to
// the console.

// Solution:
const { exec } = require('child_process');

function executeCommand(command) {
    // Implementation
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log('Command Output:\n' + stdout);
    });
}

executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!