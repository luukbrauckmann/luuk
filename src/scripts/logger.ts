import chalk from 'chalk';

function getTime() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
}

export function log(message: string) {
	const timestamp = getTime();
	console.log(`${chalk.dim(timestamp)} ${chalk.blue('[user]')} ${message}`);
}

export function warn(message: string) {
	const timestamp = getTime();
	console.log(`${chalk.yellow.bold(timestamp)} ${chalk.yellow('[WARN]')} ${message}`);
}

export function error(message: string) {
	const timestamp = getTime();
	console.log(`${chalk.red.bold(timestamp)} ${chalk.red('[ERROR]')} ${chalk.red(message)}`);
}
