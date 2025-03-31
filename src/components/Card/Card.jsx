import ProfilePicture from './CardPicture.jsx';
import CardTitle from './CardTitle.jsx';
import CardDetails from './CardDetails.jsx';
import Button from './Button.jsx';

function Card({ imgUrl, title, details, btnTxt, btnCallBack, extraDetails }) {
	const toolTip = title ?? 'Click to view more details';
	return (
		<div className='card' title={toolTip}>
			<ProfilePicture url={imgUrl} alt={toolTip} />
			<CardTitle text={title} />
			<CardDetails text={details} />
			<Button text={btnTxt} callBack={btnCallBack} />
			{extraDetails !== undefined ? (
				<p className='card__extradetails'>{extraDetails}</p>
			) : null}
		</div>
	);
}

export default Card;
