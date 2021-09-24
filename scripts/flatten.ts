import fs from 'fs';
import hre from 'hardhat';
import path from 'path';

const CONTRACT_FILE = 'Flink.sol';
const SDPX_LICENSE = 'Apache-2.0';
const OUT_DIR = path.join(__dirname, '..', 'dist');

async function main() {
	let flat = '';
	const originalStdoutWrite = process.stdout.write.bind(process.stdout);

	// @ts-expect-error Magic
	process.stdout.write = (chunk) => {
		if (typeof chunk === 'string') {
			flat += chunk;
		}
	};

	await hre.run('flatten', {
		files: [path.join(__dirname, '..', 'contracts', CONTRACT_FILE)]
	});

	process.stdout.write = originalStdoutWrite;

	const outLines = flat
		.replace(/\/\/ SPDX-License-Identifier: (.*)/gi, (_, p1) => `// ${p1}`)
		.replace(/\/\/ File .*/gi, '')
		.replace(/\n\n\n\n/gi, '')
		.split('\n');
	outLines.splice(0, 0, `// SPDX-License-Identifier: ${SDPX_LICENSE}`);
	outLines.splice(1, 1);

	const out = outLines.join('\n');

	fs.mkdirSync(OUT_DIR, { recursive: true });
	fs.writeFileSync(path.join(OUT_DIR, `Flat${CONTRACT_FILE}`), out);
}

void main().catch((error) => {
	console.error(error);
	process.exit(1);
});
