import { Variants } from 'framer-motion';

export const fadeLeft: Variants = {
	hidden: { opacity: 0, x: -300 },
	visible: { opacity: 1, x: 0 },
};

export const fadeButton: Variants = {
	hidden: { opacity: 0, x: 0 },
	visible: { opacity: 1, x: 0 },
};

export const fadeTop1: Variants = {
	hidden: { opacity: 0, y: 130 },
	visible: { opacity: 1, y: 0 },
};
export const fadeTop2: Variants = {
	hidden: { opacity: 0, y: 130 },
	visible: { opacity: 1, y: 0 },
};
export const fadeTop3: Variants = {
	hidden: { opacity: 0, y: 130 },
	visible: { opacity: 1, y: 0 },
	animate: {},
};
