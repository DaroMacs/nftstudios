import { Box, Link, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeLeftLabel } from '../components/variants';

const Label = () => {
	return (
		<motion.div
			variants={fadeLeftLabel}
			initial='hidden'
			animate='visible'
			transition={{ duration: 1 }}
		>
			<Box
				mt={{ base: '80px', md: 10 }}
				position={'relative'}
				w={'150px'}
				bottom={{ base: '30px', md: '0px' }}
				left={{ base: '-15px', md: 0 }}
				roundedTopRight={'md'}
				roundedBottomRight={'md'}
				bg={'pink.500'}
			>
				<Text px={3} py={1} fontSize={'15px'} color={'whiteAlpha.800'}>
					<Link
						href='https://www.linkedin.com/in/dario-macedo-44818a55/'
						isExternal
					>
						Dev.Dario.Macedo
					</Link>
				</Text>
			</Box>
		</motion.div>
	);
};

export default Label;
