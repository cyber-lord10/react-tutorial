import PropTypes from 'prop-types';

// const callBack = (e) => {
// 	props.callBack(e);
// };

function ButtonDemo(props) {
	return (
		<button type='button' className='btn' onClick={props.callBack}>
			{props.text}
		</button>
	);
}

ButtonDemo.propTypes = {
	text: PropTypes.string,
	callBack: PropTypes.func,
};

ButtonDemo.defaultProps = {
	text: 'Default button!',
	callBack: () => {},
};

export default ButtonDemo;
