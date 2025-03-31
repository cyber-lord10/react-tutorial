import PropTypes from 'prop-types';

const defUrl = './src/assets/images/default.jpeg';

function ProfilePicture({ url = defUrl }) {
	return <img className='card-image' src={url} alt='' />;
}

ProfilePicture.propTypes = {
	url: PropTypes.string,
};

export default ProfilePicture;
