//Import Statements
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//Functions
// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   };
// };

// export const stateControl = storeState();
// export const stateControl1 = storeState();

// const changeState = (prop) => {
//   return (value) => {
//     if (typeof value === "number") {
//       return (state) => ({
//         ...state,
//         [prop] : (state[prop] || 0) + value
//       });
//     } else {
//       return (state) => ({
//         ...state,
//         [prop] : (state[prop] || "") + value
//       });
//     }
//   };
// };
//------------------------------------- prev work 
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();
const stateControl1 = storeState();
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const water = changeState("water")(1);
const drown = changeState("water")(3);

const shineLight = changeState("light")(1);
const shineStar = changeState("light")(5);




//Document Ready
$(document).ready(function(){
  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
  });  
  $('#show-state1').click(function() {
    const currentState = stateControl1();
    $('#soil-value1').text(`Soil: ${currentState.soil}`);
    $('#water-value1').text(`Water ${currentState.water}`);
    $('#light-value1').text(`Light: ${currentState.light}`);
  });
  $('#feed').click(function() {
    const newState = stateControl(feed);
    console.log(newState);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#water').click(function() {
    const newState = stateControl(water);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#light').click(function() {
    const newState = stateControl(shineLight);
    $('#light-value').text(`Light: ${newState.light}`);
  });
  $('#feed1').click(function() {
    const newState = stateControl1(blueFood);
    $('#soil-value1').text(`Soil: ${newState.soil}`);
  });
  $('#water1').click(function() {
    const newState = stateControl1(drown);
    $('#water-value1').text(`Water: ${newState.water}`);
  });
  $('#light1').click(function() {
    const newState = stateControl1(shineStar);
    $('#light-value1').text(`Light: ${newState.light}`);
  });
});