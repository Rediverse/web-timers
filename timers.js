let webTimers = {
	timer: class Timer {
		constructor(selector) {
			this.el = $(selector);
		}

		init(format) {
			this.format = format;
			console.log(`[WEBTIMERS]: Timer initialized with format ${this.format}`);
		}

		async start(duration, unit) {
			this.duration = duration;
			this.unit = unit;
			this.timerStart = moment().format('X');
			this.timerEnd = await getEnd(duration, unit);

			this.el.text(moment(moment.duration(this.timerEnd, 'X').asSeconds(), 's').format(this.format));

			console.log(this.timerStart, this.timerEnd);

			let timesRun = 0;

			this.timerInterval = setInterval(() => {
				executeTimer(this);
			}, 250);

			function executeTimer(mainThis) {
				timesRun++;
				let val = timestamp(mainThis.timerEnd);
				let formatted = moment(val.asSeconds(), 's');
				formatted = moment(formatted, 's').format(mainThis.format);
				if (timesRun >= 2) {
					mainThis.el.text(formatted);
				}

				if (val.asSeconds() == 0) {
					mainThis.stop();
				}
			}

			function timestamp(timerEnd) {
				let now = moment().format('X');
				let diff = timerEnd - now;
				diff = moment.duration(diff, 's');
				return diff;
			}

			function getEnd(duration, unit) {
				let res = moment().add(duration, unit).format('X');
				console.log(res);
				return res;
			}
		}

		stop() {
			clearInterval(this.timerInterval);
		}
	}
};
