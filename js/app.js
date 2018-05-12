'use strict';

var userPoints = 0;
var favoriteNumber = 143;
var attempts = 1;
var guesses = 1;
//A guessing game to familiarize the user with myself, Edward Puzino
//A total of five yes or no questions


console.log('Hello world');

if (confirm(
    'Welcome to my quessing game!  My name is Edward Puzino.  Would you like to play?'))
{
    var user = prompt('What is your name?');
/*   
    alert('Hi ' + user + ', I am going to ask you a few questions to help you learn some interesting facts about me.  You will be given one point for every correct answer.  Good luck!');

    var marriages = prompt('Have I been married twice?').toLowerCase();
    console.log(user + ' answered ' + marriages + ' to question number 1.');
    if (marriages === 'no' || marriages === 'n'){
        alert('Correct, I have not been married twice, I have been married three times, as has my wife. We each have two children from previous marriages and we also have a total of five grandchildren.');
        userPoints++;
    } else {
        alert('Sorry, I have not been married twice, I have been married three times, as has my wife. We each have two children from previous marriages and we also have a total of five grandchildren.');
    }
    alert('You have ' + userPoints + ' points!');

    var weddings = prompt('Have I been a part of at least a dozen marriages?').toLowerCase();
    console.log(user + ' answered ' + weddings + ' to question number 2.');
    if (weddings === 'yes' || weddings === 'y'){
        alert('Correct, I have been a part of at least a dozen marriages.  Besides being married three times, I have officiated at least ten weddings');
        userPoints++;
    } else {
        alert('Sorry, I have been a part of at least a dozen marriages.  Besides being married three times, I have officiated at least ten weddings');
    }
    alert('You have ' + userPoints + ' points!');

    var military = prompt('Did I serve in the Navy for 14 years?').toLowerCase();
    console.log(user + ' answered ' + military + ' to question number 3.');
    if (military === 'no' || military === 'n'){
        alert('Correct, I did not serve in the Navy for 14 years, I served in the Air Force, and the Arizona Air National Guard for 31 years.');
        userPoints++;
    } else {
        alert('Sorry, I did not serve in the Navy for 14 years, I served in the Air Force, and the Arizona Air National Guard for 31 years.');
    }
    alert('You have ' + userPoints + ' points!');

    var pilot = prompt('Am I a pilot?').toLowerCase();
    console.log(user + ' answered ' + pilot + ' to question number 4.');
    if (pilot === 'yes' || pilot === 'y'){
        alert('Correct, I was not a pilot in the military, but I did get my pilots licence.');
        userPoints++
    } else {
        alert('Sorry, I did get my pilots licence, although I did not fly for the military.');
    }
    alert('You have ' + userPoints + ' points!');

    var countries = prompt('Have I been to eight foreign countries?').toLowerCase();
    console.log(user + ' answered ' + countries + ' to question number 5.');
    if (countries === 'no' || countries === 'n'){
        alert('Correct, I have only been to Canada and Mexico and neither one with the military');
        userPoints++
    } else {
        alert('Sorry, I have only been to Canada and Mexico and neither one with the military');
    }  
    
    var chosenNumber = prompt('I have a favorite number between 1 and 200, you have four chances to guess it, please enter your first guess below.')
        while ((chosenNumber != favoriteNumber) && (attempts < 4 )) {
            console.log(user + ' has guessed ' + chosenNumber + ' for guess #' + attempts);
            if (chosenNumber < favoriteNumber){
                var chosenNumber = prompt('Sorry you did not guess correctly, your guess was too low, that was attempt #' + attempts + ' please try again.');
            } else {
                var chosenNumber = prompt('Sorry you did not guess correctly, your guess was too high, that was attempt #' + attempts + ' please try again.');
            }         
            attempts++                   
        }       
    console.log(user + ' has guessed ' + chosenNumber + ' for guess #' + attempts);    
    if (chosenNumber == favoriteNumber) {
        alert('Congratulations, you have guessed correctly, very impresive.');
        userPoints++
    } else {
        alert('You were unable to guess my favorite number, it is ' + favoriteNumber);
    }*/

    var i = 0;
    var states =['new jersey', 'arizona', 'colorado', 'arkansas'];
    var chosenState = prompt('I have lived in four states besides Washington, can you guess any of them?  I\'ll give you seven tries this time.').toLowerCase();
        while ((guesses < 7) && (chosenState != states[i])) {  
            console.log(user +' has guessed ' + chosenState + ' for guess #' + guesses);    
            while ((chosenState != states[i]) && (i < states.length)) {            
            i++ 
            }
            guesses++
        i = 0;       
        }
    console.log(user + ' has guessed ' + chosenState + ' for guess #' + guesses);
    if (chosenState == states[i]) {
        alert('Great job, you got that right, besides Washington, I have lived in New Jersey, Arizona, Colorado, and Arkansas.');
        userPoints++
    } else {
        alert('Sorry, besides Washington, I have lived in New Jersey, Arizona, Colorado, and Arkansas');
    }

    if (userPoints < 3){
        alert('You only received ' + userPoints + ' points out of 7, better luck next time ' + user + '.');
    } else if(userPoints < 5){
        alert('Not to shabby ' + user + ', you got ' + userPoints + ' out of 7.');
    } else if(userPoints < 7){
        alert('Nice ' + user + ', you got ' + userPoints + ' out of 7, good job!');
    } else {        
        alert('Amazing job ' + user + ', you got all 7 questions correct. Have we met before?');
    }

} else {
    alert('I\'m sorry to hear that, see you around.')
}