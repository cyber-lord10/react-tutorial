import ButtonDemo from './ButtonDemo.jsx';

function CardDemo() {
	const callBack = (e) => {
		const nextEle = e.target.nextElementSibling;
		nextEle.textContent = 'You clicked my senior!!';
		nextEle.classList.add('para');
		alert('Button clicked!');
	};

	return (
		<>
			<ButtonDemo text='text' callBack={callBack} />
			<p></p>
		</>
	);
}

export default CardDemo;
