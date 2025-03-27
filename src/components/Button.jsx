import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
	// const styles = {
	// 	color: props.textColor,
	// 	backgroundColor: props.bgColor,
	// 	borderColor: `${props.borderWidth}px solid ${props.borderColor}`,
	// };

	// const eventHandlers = {'click': (e) => e.target.};

	// Determine the event handler based on the eventType prop
	// const currentEventHandler = props.eventType
	// 	? { [props.eventType]: props.callBack }
	// : {};

	return (
		<button type='button' className='btn'>
			{props.text}
		</button>
	);
}

Button.propTypes = {
	eventType: PropTypes.oneOf([
		'click',
		'dbclick',
		'mousedown',
		'mouseup',
		'mousemove',
		'mouseover',
		'mouseout',
		'mouseenter',
		'mouseleave',
	]),
	callBack: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	textColor: PropTypes.string,
	textHoverColor: PropTypes.string,
	bgColor: PropTypes.string,
	bgHoverColor: PropTypes.string,
	borderColor: PropTypes.string,
	borderWidth: PropTypes.number,
};

Button.defaultProps = {
	eventType: 'click',
	callBack: () => alert('You clicked me!'),
	text: 'Click me',
	textColor: '#f5f5dc',
	textHoverColor: '#f5f5dc',
	bgColor: '#1e0080',
	bgHoverColor: '#1e0080bb',
	borderColor: '#0b012dbb',
	borderWidth: 1,
};

export default Button;
