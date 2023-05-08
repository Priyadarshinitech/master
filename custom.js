setInterval(() =>{
  let outputValues = document.querySelector(".output");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "pm" : "am";
  let output = hours + ":" + minutes + ":" + seconds + ":" + ampm;
  outputValues.innerHTML = output;
},1000)


