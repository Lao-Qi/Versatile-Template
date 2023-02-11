/**
 * generate new package file to /dist/server
 * 生成新的package文件到打包好的服务端目录中，方便部署
 */
const { readFile, writeFile } = require('fs');
const { join } = require('path').win32;
const { promisify } = require('util');

const READ_PATH = join(__dirname, '../package.json');
const WRITE_PATH = join(__dirname, '../dist/package.json');
const asyncReadFile = promisify(readFile);
const asyncWriteFile = promisify(writeFile);

const generatePackage = async () => {
	const packageOldData = await getPackage();
	const newPackage = {
		name: packageOldData.name,
		version: packageOldData.version,
		description: packageOldData.description,
		author: packageOldData.author,
		main: packageOldData.build.main,
		scripts: {
			start: `node ${packageOldData.build.main}`,
		},
		dependencies: parseServerDependencies(packageOldData),
	};

	try {
		await asyncWriteFile(WRITE_PATH, JSON.stringify(newPackage, `\n    `), 'utf-8');
	} catch (err) {
		throw Error(`write content in ${WRITE_PATH} file on error & ${err}`);
	}
};

const getPackage = async () => {
	let data = null;
	try {
		data = await asyncReadFile(READ_PATH, 'utf-8');
	} catch (err) {
		throw Error(`read ${READ_PATH} file on error & ${err}`);
	}

	try {
		data = JSON.parse(data);
	} catch (err) {
		throw Error(`parse json from ${READ_PATH} on error & ${err}`);
	}
	return data;
};

const parseServerDependencies = packageOldData => {
	let newDeps = {};
	packageOldData.build.dependencies ? packageOldData.build.dependencies.forEach(dep => {
		packageOldData.dependencies[dep] && (newDeps[dep] = packageOldData.dependencies[dep])
	}) : (newDeps = packageOldData.dependencies)
	return newDeps;
};

generatePackage()
	.then(() => {
		console.log(`generate new package file to ${WRITE_PATH} succeed!`);
	})
	.catch(err => {
		throw err;
	});
