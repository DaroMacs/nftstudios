import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './Hero';

function App() {
	return (
		<Box
			bgGradient='linear(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #85a0e1, #74a4de, #67a8d7, #5ba6c7, #59a2b5, #5e9da4, #669794)'
			h='calc(100vh)'
		>
			<Navbar />
			<Hero />
		</Box>
	);
}

export default App;
