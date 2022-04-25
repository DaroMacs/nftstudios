import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MainBackground = () => {
	return (
		<Flex justifyContent={'center'} alignItems={'center'} h='100vh'>
			<Box p={4}>MainBackground</Box>
		</Flex>
	);
};

export default MainBackground;
