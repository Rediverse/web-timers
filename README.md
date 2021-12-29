# web-timers
Timers for your websites using moment.js

This small library allows you to make a timer. The process is very simple.

## Installation
You just need to include this library, jQuery and Moment to your library.
```html
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Include Moment -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<!-- Include Web Timers -->
<script src="https://cdn.jsdelivr.net/gh/Rediverse/web-timers@main/timers.js"></script>
<!-- Include your script -->
<script src="script.js"></script>
```
Now you can create a timer using this syntax:
```js
// create a timer. Replace .timer with your timer element selector.
let timer = new webTimers.timer('.timer');

// mm:ss is the format which the timer will display
timer.init('mm:ss');

// fist argument is the time, second argument is the type, what the first argument is.
timer.start(1, 'minutes');

//If you like, you can stop the timer.
timer.stop();
```
