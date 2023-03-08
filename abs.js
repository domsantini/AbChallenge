const upperText = document.querySelector('#upperText');
const lowerText = document.querySelector('#lowerText');
const obliqueText = document.querySelector('#obliqueText');
const button = document.querySelector('button');


const upperEx = [
    'crunches', 
    'high crunches',
    'sit-ups',
    'long arm crunches', 
    'hundreds',
    'knee crunches',
];
const lowerEx = [
    'reverse crunches', 
    'scissors',
    'leg raises',
    'pulse ups', 
    'bicycle crunches',
    'crunch kicks',
];
const obliqueEx = [
    'sitting twists',
    'cross crunch',
    'side jack-knives',
    'toe taps',
    'sitting punches',
    'side plank'
];


function getExercise(zoneArray, htmlText) {
    let num = Math.floor(Math.random() * zoneArray.length);
    htmlText.innerHTML = zoneArray[num];
}

button.addEventListener('click', () => {
    getExercise(upperEx, upperText);
    getExercise(lowerEx, lowerText);
    getExercise(obliqueEx, obliqueText);
})