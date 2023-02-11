/**
 * each command starts a process to run
 * 每一个命令开启一进程来运行
 */
const arg = require('arg');
const { exec } = require('child_process');
const { join } = require('path').win32;

const runScript = scripts => {
	scripts.forEach(script => forkProcess(script));
};

const forkProcess = script => {
	const childProcess = exec(script, {
		cwd: join(__dirname, '../'),
	});

	childProcess.stdout.on('data', data => {
		console.log(data.trim());
	});

	childProcess.stderr.on('data', data => {
		console.log(data.trim());
	});

	childProcess.on('error', err => {
		console.log(err);
	});
};

const args = arg({
	'--script': String,
	'-s': '--script',
});

args['--script'] && runScript(args['--script'].split('&'));
