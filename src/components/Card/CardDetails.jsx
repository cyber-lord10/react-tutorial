import PropTypes from 'prop-types';

const defText = 'DEFAULT DETAILS';

function CardDetails({ text = defText }) {
	return <p className='card__details'>{text}</p>;
}

CardDetails.propTypes = {
	text: PropTypes.string,
};

export default CardDetails;
