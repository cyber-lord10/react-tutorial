import PropTypes from 'prop-types';

const defText = 'Button';
const defCallBack = () => {
	alert('Default button clicked!');
};

function Button({ text = defText, callBack = defCallBack }) {
	return (
		<button type='button' className='btn' onClick={callBack}>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	callBack: PropTypes.func,
};

export default Button;
