export default class Time {
  // BEGIN
    static fromString(time) {
        const splittedTime = time.split(':')
        const hours        = splittedTime[0]
        const minutes      = splittedTime[1]
        return new Time(hours, minutes)
    }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
