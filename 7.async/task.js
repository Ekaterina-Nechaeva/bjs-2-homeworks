class AlarmClock {
    constructor() {
        this.alarmCollection = []; // массив звонков
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        const call = this.alarmCollection.some(clock => clock.time === time)
            if (call === true) {
                console.warn('Уже присутствует звонок на это же время');
            }
            this.alarmCollection.push({
                callback : callback,
                time : time,
                canCall : true
            });

        }
    removeClock(time) {
     this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
}
    getCurrentFormattedTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return hours + ":" + minutes; }


    start() {
    if (this.intervalId !== null) {
        return;
    }

    this.intervalId = setInterval(() => {
        const now = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(call => {
            if (call.time === now && call.canCall === true) {
                call.canCall = false;
                call.callback();
            }
        });
    }, 1000);}

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
}
    resetAllCalls() {
        this.alarmCollection.forEach(call => {
            call.canCall = true;
        });

    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
