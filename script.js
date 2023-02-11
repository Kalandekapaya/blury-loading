const wrapper = document.getElementById("wrapper");
const loadText = document.querySelector('.loading-text') 
const bg = document.querySelector('.bg')

const scale = (min, in_min, in_max, out_min, out_max) =>{
  return (min - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let load = 0
let int = setInterval(blurring, 30)
let non  = scale(load, 0, 100, 1, 0)

function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = load + '%'
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = "blur(0px + scale(load, 0, 100, 1, 0))"
  

}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
} 

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);