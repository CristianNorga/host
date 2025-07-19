import { getInput, setFailed } from '@actions/core';
import { execSync } from 'child_process';
import { OperationsEnum } from './types/operations';
import { OptionsUpdateTag } from './types/options';

const tagAction = {
	createTag(tag: string, branch: string) {
		console.log(`Creando el tag: ${tag}`);

		if (branch) {
			console.log(`Creando el tag en la rama: ${branch}`);
			execSync(`git checkout ${branch}`);
		}

		execSync(`git tag -f ${tag}`);
		execSync(`git push origin ${tag} --force`);

		console.log(`✅ Tag ${tag} creado correctamente`);
	},
	getOne(tag: string) {
		console.log(`Leyendo el tag: ${tag}`);

		execSync(`TAG=$(git show ${tag})`);
		execSync(`echo "tag=$TAG" >> $GITHUB_OUTPUT`);
		const tagInfo = execSync(`echo "$TAG"`).toString();
		console.log(`Información del tag: ${tagInfo}`);
	},
	getMany(commit: string) {
		console.log(`Leyendo los tags del commit: ${commit}`);

		const tags = execSync(`git tag --contains ${commit}`).toString().trim();
		if (tags) {
			console.log(`Tags encontrados: ${tags}`);
			execSync(`echo "tags=${tags}" >> $GITHUB_OUTPUT`);
		} else {
			console.log('No se encontraron tags para el commit especificado.');
			execSync(`echo "tags=" >> $GITHUB_OUTPUT`);
		}
	},
	updateTag(tag: string, opt: OptionsUpdateTag) {
		console.log(`Actualizando el tag: ${tag}`);

		if (opt.description) {
			console.log(`Actualizando descripción del tag: ${opt.description}`);
			execSync(`git tag -a ${tag} -m "${opt.description}"`);
		}

		if (opt.date) {
			console.log(`Actualizando fecha del tag: ${opt.date}`);
			execSync(`git tag -f ${tag} -m "${opt.date}"`);
		}

		if (opt.branch) {
			console.log(`Moviendo el tag a la rama: ${opt.branch}`);
			execSync(`git checkout ${opt.branch}`);
			execSync(`git push origin :refs/tags/${tag}`); // Eliminar el tag antiguo
			execSync(`git push origin ${tag}`); // Crear el nuevo tag
		}

		console.log(`✅ Tag ${tag} actualizado correctamente`);
	},
};

try {
	const tag = getInput('tag-name');
	const operation = getInput('operation') as OperationsEnum;
	const branch = getInput('branch');

	execSync(`git config user.name "github-actions[bot]"`);
	execSync(
		`git config user.email "github-actions[bot]@users.noreply.github.com"`
	);

	switch (operation) {
		case OperationsEnum.CREATE:
			tagAction.createTag(tag, branch);
			break;
		case OperationsEnum.READ:
			// Implementar lógica para leer el tag si es necesario
			break;
		case OperationsEnum.UPDATE:
			console.log(`Actualizando el tag: ${tag}`);
			// Implementar lógica para actualizar el tag si es necesario
			break;
		case OperationsEnum.DELETE:
			console.log(`Eliminando el tag: ${tag}`);
			// Implementar lógica para eliminar el tag si es necesario
			break;
		default:
			setFailed(`Operación no soportada: ${operation}`);
			break;
	}

} catch (error) {
	setFailed(`❌ Error al ejecutar la acción: ${error instanceof Error ? error.message : error}`);
}
