import Button from './Button';

function Card() {
	return (
		<div>
			<div className='count'>0</div>
			<div className='btnRow'>
				{/* <Button
					callBack={() => {alert("clicked occured")}}
					text="Click here"
				/> */}
				<p className='para'>translations Object: Stores the translations in a nested object,
					organized by language code. currentLanguage Variable: Keeps track of the
					currently selected language. setLanguage(lang) Function: Updates the
					currentLanguage. Finds the translated text using
					translations[lang][key]. Updates the content of the HTML elements.
					Updates the button's text and onclick attribute for the next language
					switch. Stores the language preference in local storage (optional).
					window.onload: Loads the language from local storage when the page loads
					(optional).</p>
			</div>
		</div>
	);
}

export default Card;
