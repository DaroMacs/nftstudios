import { Text, Flex, Heading } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

const MainBackground = () => {
	return (
		<Flex justifyContent={'center'} alignItems={'center'} h='100vh'>
			<Flex w={'full'} justifyContent='space-around'>
				<Heading>Hello</Heading>
				<Text>Welcome to the PixelChart</Text>
			</Flex>
		</Flex>
	);
};

export default MainBackground;
