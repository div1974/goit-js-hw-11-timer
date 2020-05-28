//Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно
// определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах,
// страницах регистрации событий, во время технического обслуживания и т. д.

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.refs = {
      
      daysValue: this.selector.querySelector('span[data-value="days"]'),
      hoursValue: this.selector.querySelector('span[data-value="hours"]'),
      minsValue: this.selector.querySelector('span[data-value="mins"]'),
      secsValue: this.selector.querySelector('span[data-value="secs"]'),
    };

  }

  
  startTimer() {
    const timerId = setInterval(() => {
      const startTime = Date.now();
      const deltaTime = this.targetDate.getTime() - startTime;

      const days = String(
        Math.floor(deltaTime / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const mins = String(
        Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const secs = String(
        Math.floor((deltaTime % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      this.refs.daysValue.textContent = days;
      this.refs.hoursValue.textContent = hours;
      this.refs.minsValue.textContent = mins;
      this.refs.secsValue.textContent = secs;

      if (deltaTime < 0) { 
        clearInterval(timerId); 
        this.selector.innerHTML = "EXPIRED"; 
    } 
    }, 1000);
  }

}
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 26, 2020")
});


timer.startTimer();

