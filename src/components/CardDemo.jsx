import ProfilePictureDemo from './ProfilePictureDemo.jsx';
import CardTitleDemo from './CardTitleDemo.jsx';
import ButtonDemo from './ButtonDemo.jsx';

function CardDemo({ title, title, details, btnTxt, btnCallBack }) {
	return (
		<div className='card'>
			<ProfilePictureDemo url={img ?? null} />
			<CardTitleDemo text={title ?? null} />
			<CardDetails text={details ?? null} />
			<ButtonDemo text={btnTxt ?? null} callBack={btnCallBack ?? null} />
			<p text={extraDetails ?? null} />
		</div>
	);
}

export default CardDemo;
