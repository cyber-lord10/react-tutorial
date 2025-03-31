import CardDemo from './components/CardDemo.jsx';

function App() {
	const callBack = (e) => {
		const nextEle = e.target.nextElementSibling;
		if (nextEle) {
			nextEle.textContent = 'You clicked my senior!!';
			nextEle.classList.add('para');
			alert('Button clicked!');
		}
	};

	return <CardDemo />;
}

export default App;
