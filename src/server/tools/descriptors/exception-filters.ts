import type { FilterType, ExceptionType } from '../../types/descriptors';
import { FILTER, EXECPTION } from '../../types/constants';

export const UseControllerFilter = (filter: FilterType) => {
	return (target: any) => {
		Reflect.defineMetadata(FILTER, filter, target);
	};
};

export const UseControllerExecption = (execption: ExceptionType) => {
	return (target: any) => {
		Reflect.defineMetadata(EXECPTION, execption, target);
	};
};

export const UseFilter = (filter: FilterType) => {
	return (target: any, key: string) => {
		Reflect.defineMetadata(FILTER, filter, target, key);
	};
};

export const UseExecption = (execption: ExceptionType) => {
	return (target: any, key: string) => {
		Reflect.defineMetadata(EXECPTION, execption, target, key);
	};
};
