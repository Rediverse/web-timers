let timer = new webTimers.timer('.timer');

timer.init('mm:ss');

timer.start(1, 'minutes');

setTimeout(() => {
	timer.stop();
}, 5000);
