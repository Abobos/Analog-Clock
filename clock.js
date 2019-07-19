const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegree = (seconds * 360) / 60 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const minutes = now.getMinutes();
  const minuteDegree = (minutes * 360) / 60 + (seconds * 360) / (60 * 60) + 90;
  minHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hours = now.getHours();
  const hourDegree = (hours * 360) / 12 + (minutes * 360) / (60 * 12) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setDate();
setInterval(setDate, 1000);
