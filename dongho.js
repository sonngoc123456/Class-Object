class StopWatch {
    startTime;
    endTime;
    constructor(starTime,endTime) {
        this.startTime=starTime;
        this.endTime=endTime;
    }
    getstarTime = () => this.startTime;
    getendTime = () => this.endTime;
    start = () => this.startTime= new Date();
    stop = () => this.endTime = new Date();
    getElapsed = () => this.endTime-this.startTime;
}

let time = new StopWatch();
console.log(time.start());
console.log(time.stop());
console.log(time.getElapsed());