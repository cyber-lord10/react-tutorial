import PropTypes from 'prop-types';
import ProfilePicture from './CardPicture.jsx';
import CardTitle from './CardTitle.jsx';
import CardDetails from './CardDetails.jsx';
import Button from './Button.jsx';

function Card({ imgUrl, title, details, btnTxt, btnCallBack, extraDetails }) {
	const toolTip = title ?? 'click to view more details';
	return (
		<div className='card'>
			<ProfilePicture url={imgUrl} alt={toolTip} />
			<div className='card__body'>
				<div className='card__body-content'>
					<CardTitle text={title} />
					<CardDetails text={details} />
				</div>
				<div className='card__body-tail'>
					<div className='card__btn-container'>
						<Button text={btnTxt} callBack={btnCallBack} />
					</div>
				</div>
			</div>
			{extraDetails !== undefined ? (
				<p className='card__extradetails'>{extraDetails}</p>
			) : null}
			<div className='card__tooltip'>{toolTip}</div>
		</div>
	);
}

Card.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	details: PropTypes.string,
	btnTxt: PropTypes.string,
	btnCallBack: PropTypes.func,
	extraDetails: PropTypes.string,
};

export default Card;
