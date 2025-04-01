import Card from './components/Card/Card.jsx';

function App() {
	return (
		<div className='container'>
			{/*} Google Calendar Appointment Scheduling begin */}
			{/* <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
<script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script> */}
			{/* <script>
(function() {
  var target = document.currentScript;
  window.addEventListener('load', function() {
    calendar.schedulingButton.load({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0c_csHaFAGQLFDQUiZmlnCxJOvj-PTF9mzsmeD4Dklw4tKCKwDIDSs960c_nv-s888fP0EzcOW?gv=true',
      color: '#C0CA33',
      label: 'Book an appointment',
      target,
    });
  });
})();
</script> */}
			{/* <!-- end Google Calendar Appointment Scheduling --></link> */}
			<div className='grid'>
				<Card
					imgUrl='./src/assets/images/cybertron.png'
					details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam unde adipisci, velit quibusdam distinctio odit. Voluptatibus soluta repudiandae et ad aliquid nobis eum! Praesentium laudantium nobis sint illum laboriosam .'
					btnTxt='view more'
				/>
				<Card
					btnTxt='view more'
					details='distinctio odit. Voluptatibus soluta repudiandae et ad aliquid nobis eum! Praesentium laudantium nobis sint illum laboriosam.'
				/>
				<Card
					imgUrl='./src/assets/images/cybertron.png'
					details='dolor sit amet consectetur adipisicing elit. Minus quisquam unde'
					btnTxt='view more'
				/>
				<Card
					btnTxt='view more'
					details='Praesentium laudantium nobis sint illum laboriosam aliquid.'
				/>
				<Card imgUrl='./src/assets/images/cybertron.png' btnTxt='view more' />
				<Card btnTxt='view more' />
				<Card imgUrl='./src/assets/images/cybertron.png' btnTxt='view more' />
				<Card btnTxt='view more' />
				<Card imgUrl='./src/assets/images/cybertron.png' btnTxt='view more' />
				<Card btnTxt='view more' />
				<Card imgUrl='./src/assets/images/cybertron.png' btnTxt='view more' />
				<Card
					btnTxt='view more'
					details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam unde adipisci, velit quibusdam distinctio odit. Voluptatibus soluta repudiandae et ad aliquid nobis eum! Praesentium laudantium nobis sint illum laboriosam .'
				/>
				<Card imgUrl='./src/assets/images/cybertron.png' btnTxt='view more' />
				<Card btnTxt='view more' />
				<Card imgUrl='./src/assets/images/cybertron.png' btnTxt='view more' />
				<Card btnTxt='view more' />
			</div>
		</div>
	);
}

export default App;
