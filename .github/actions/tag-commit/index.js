import { getInput, setFailed } from '@actions/core';
import { execSync } from 'child_process';

try {
	const tag = getInput('tag-name');
	console.log(`Creando el tag: ${tag}`);

	execSync(`git config user.name "github-actions[bot]"`);
	execSync(
		`git config user.email "github-actions[bot]@users.noreply.github.com"`
	);

	execSync(`git tag -f ${tag}`);
	execSync(`git push origin ${tag} --force`);

	console.log(`✅ Tag ${tag} creado correctamente`);
} catch (error) {
	setFailed(`❌ Error creando el tag: ${error.message}`);
}
