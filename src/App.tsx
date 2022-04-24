import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Box p={4}>Main Content Here</Box>
		</>
	);
}

export default App;
