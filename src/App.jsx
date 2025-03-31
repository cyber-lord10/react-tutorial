import Card from './components/Card/Card.jsx';

function App() {

	return (
		<div className='container'>
			<div className='grid'>
				<Card
					imgUrl='./src/assets/images/cybertron.png'
					details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam unde adipisci, velit quibusdam distinctio odit. Voluptatibus soluta repudiandae et ad aliquid nobis eum! Praesentium laudantium nobis sint illum laboriosam.'
				/>
				<Card />
				<Card imgUrl='./src/assets/images/cybertron.png' />
				<Card />
				<Card imgUrl='./src/assets/images/cybertron.png' />
				<Card />
				<Card imgUrl='./src/assets/images/cybertron.png' />
				<Card />
				<Card imgUrl='./src/assets/images/cybertron.png' />
				<Card />
				<Card imgUrl='./src/assets/images/cybertron.png' />
				<Card />
				<Card imgUrl='./src/assets/images/cybertron.png' />
				<Card />
				<Card imgUrl='./src/assets/images/cybertron.png' />
				<Card />
			</div>
		</div>
	);
}

export default App;
