import PropTypes from 'prop-types';

const defText = 'default title';

function CardTitle({ text = defText }) {
	return <h3 className='card__title'>{text}</h3>;
}

CardTitle.propTypes = {
	text: PropTypes.string,
};

export default CardTitle;
