import {spawn}   from 'child_process';
import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const spawnChildProcess = async (args) => {
    const script = await fs.readFile(path.join(__dirname, 'files', 'script.js'));
    
    
  
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
