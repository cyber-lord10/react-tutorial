import ButtonDemo from './ButtonDemo.jsx';
import ProfilePicture from './ProfilePicture.jsx';

function CardDemo() {
	const callBack = (e) => {
		const nextEle = e.target.nextElementSibling;
		if (nextEle) {
			nextEle.textContent = 'You clicked my senior!!';
			nextEle.classList.add('para');
			alert('Button clicked!');
		}
	};

	return (
		<>
			<ButtonDemo callBack={callBack} />
			<p></p>
		</>
	);
}

export default CardDemo;
