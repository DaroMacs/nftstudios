import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import MainBackground from './utils/MainBackground';

function App() {
	return (
		<Box bg={'red.400'} h='calc(100vh)'>
			<Navbar />
			<MainBackground />
		</Box>
	);
}

export default App;
