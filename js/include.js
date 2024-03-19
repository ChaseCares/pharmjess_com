END_DATE = 'June 30, 2024 15:30:00';

const container = document.getElementById('countdown');

function updateCountdown() {
	const time = Date.parse(END_DATE) - Date.parse(new Date());
	const days = Math.floor(time / (1000 * 60 * 60 * 24));
	const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((time / 1000 / 60) % 60);
	const seconds = Math.floor((time / 1000) % 60);
	container.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

function show_answer() {
	document.getElementById('answer_placeolder').style.display = 'none';
	document.getElementById('answer').style.display = 'block';
}
