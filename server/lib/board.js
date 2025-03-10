var serialport = require("serialport");
var util = require('util');
var events = require('events');

function Board(opts) {
    if (!(this instanceof Board)) {
        return new Board(opts);
    }

    events.EventEmitter.call(this);

    var board = this;

    // Ensure opts is an object
    opts = opts || {};

    this.ready = false;
    var sp = this.serialport = opts.serialport || new serialport.SerialPort(
        { 
            path: opts.port, 
            baudRate: opts.baudrate || 112500,
            autoOpen: true
        });

    sp.on('open', function () {
        board.emit('ready');
    });

    sp.on('error', function (error) {
        board.emit('error', error);
    });

    sp.on('data', function (data) {
        // do something with data
        board.emit('data', data);
    });

    Board.instance = this;
}
util.inherits(Board, events.EventEmitter);

Board.prototype.servoWrite = function(pin, pwm, duration) {
    this.serialport.write('#' + pin + 'P' + pwm + 'T' + (duration > 0 ? duration : '100') + "\r\n");
};

Board.prototype.wait = function (time, callback) {
    return setTimeout(callback.bind(this), time);
};

Board.prototype.loop = function (time, callback) {
    return setInterval(callback.bind(this), time);
};

Board.constrain = function (value, min, max) {
    return  (value < min) ? min : ((value > max) ? max : value);
};

module.exports = Board;