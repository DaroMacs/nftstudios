import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ImagePixeledProps {
	src: string;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	position?: 'absolute' | 'relative' | 'unset';
}

const ImagePixeled = ({
	src,
	top,
	left,
	right,
	bottom,
	position,
}: ImagePixeledProps) => {
	return (
		<motion.div whileHover={{ scale: 1.1 }}>
			<Image
				position={position}
				top={top}
				left={left}
				right={right}
				bottom={bottom}
				boxSize='110px'
				objectFit='cover'
				rounded={'full'}
				src={src}
				alt={src}
			/>
		</motion.div>
	);
};

export default ImagePixeled;
