import PropTypes from 'prop-types';

const defText = 'Button';
const defCallBack = () => {
	alert('Default button clicked!');
};

function ButtonDemo({ text = defText, callBack = defCallBack }) {
	return (
		<button type='button' className='btn' onClick={callBack}>
			{text}
		</button>
	);
}

ButtonDemo.propTypes = {
	text: PropTypes.string,
	callBack: PropTypes.func,
};

export default ButtonDemo;
