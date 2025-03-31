import PropTypes from 'prop-types';

const defUrl = './src/assets/images/default.jpeg';
const defAlt = 'Default card picture';

function CardPicture({ url = defUrl, alt = defAlt }) {
	return <img className='card__image' src={url} alt={alt} />;
}

CardPicture.propTypes = {
	url: PropTypes.string,
	alt: PropTypes.string,
};

export default CardPicture;
