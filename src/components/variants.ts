import { Variants } from 'framer-motion';

export const fadeLeft: Variants = {
	hidden: { opacity: 0, x: -300 },
	visible: { opacity: 1, x: 0 },
};
