import { exact } from 'prop-types';
import ButtonDemo from './ButtonDemo.jsx';

const callBack = (e) => {
	const nextEle = e.target.nextElementSibling;
	nextEle.textContent = 'You clicked my senior!!';
	nextEle.classList.add('para');
	alert('Button clicked!');
};

function CardDemo() {
	return (
		<>
			<ButtonDemo callBack={callBack} />
			<p></p>
		</>
	);
}

export default CardDemo;
