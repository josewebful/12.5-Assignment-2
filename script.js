'use strict';

/* Building on the previous app, create an app that lets users choose to display between 1 and 50 random dog images, then loads the images in the DOM. This app should adhere to all of the requirements from the first one, in addition to displaying the images in the DOM. */


function getDogImage(num){
  fetch('https://dog.ceo/api/breeds/image/random/'+ num)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
};

function displayResults(responseJson){
  console.log(responseJson);
$('.results').empty();

for(let i=0; i < responseJson.message.length; i++){
   $('.results').append(
    `<img src="${responseJson.message[i]}" class="results-img">`
  )};
  //display the results section
 $('.results').removeClass('hidden');
} 

function watchForm(){
  $('form').submit(event =>{
    event.preventDefault();
    const num = $('#dog-images'). val();
    console.log(num);
    getDogImage(num);
  });
}

$(function(){
  watchForm();
});
