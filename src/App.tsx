import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Label from './utils/Label';
import GridPixelCharts from './components/GridPixelCharts';

function App() {
	const [isConnected, setIsConnected] = useState(true);

	return (
		<Box
			bgGradient='linear(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #85a0e1, #74a4de, #67a8d7, #5ba6c7, #59a2b5, #5e9da4, #669794)'
			minH={'100vh'}
		>
			<Navbar />
			{!isConnected ? <Hero /> : <GridPixelCharts />}
			<Label />
		</Box>
	);
}

export default App;
