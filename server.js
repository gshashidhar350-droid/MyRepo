const { existsSync } = require('node:fs');
const { spawn } = require('node:child_process');
const path = require('node:path');

const angularServer = path.join(
  __dirname,
  'dist',
  'my-first-app',
  'server',
  'server.mjs',
);

if (!existsSync(angularServer)) {
  console.error(
    `Angular server build not found at ${angularServer}. Run "npm run build" before starting the application.`,
  );
  process.exit(1);
}

const server = spawn(process.execPath, [angularServer], {
  env: process.env,
  stdio: 'inherit',
});

server.on('error', (error) => {
  console.error('Failed to start the Angular server:', error);
  process.exitCode = 1;
});

server.on('exit', (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.kill(signal));
}