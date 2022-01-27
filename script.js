var hora = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000;
var cron;

function start() {
    cron = setInterval(timer, tempo);
}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron);
    hora = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById('counter').innerHTML = '00:00:00';
}

function timer() {

    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        if (minuots == 60) {
            minutos = 0;
            horas++;
        }
    }

    var format = (hora < 10 ? '0' + hora : hora) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);

    document.getElementById('counter').innerHTML = format;
}