'use strict';

var userPoints = 0;

//A guessing game to familiarize the user with myself, Edward Puzino
//A total of five yes or no questions, plus two facts to guess


console.log('Hello world');

if (confirm(
    'Welcome to my quessing game!  My name is Edward Puzino.  Would you like to play?'))
{
    var user = prompt('Great, first of all what is your name?');
    console.log('The user\'s name is ' + user);
   
    alert('Hi ' + user + ', I am going to ask you a few yes/no questions to help you learn some interesting facts about me.  You will be given one point for every correct answer.  Good luck!');

function questionOne(){
    var marriages = prompt('Have I been married twice?').toLowerCase();
    console.log(user + ' answered ' + marriages + ' to question number 1.');
    if (marriages === 'no' || marriages === 'n'){
        userPoints++;
        alert('Correct, I have been married three times, as has my wife. We each have two children from previous marriages and we also have a total of five grandchildren. You now have ' + userPoints + ' points!');
    } else {
        alert('Sorry, That was a trick question, I have been married three times, as has my wife. We each have two children from previous marriages and we also have a total of five grandchildren. You now have ' + userPoints + ' points!');
    }
}

function questionTwo(){
    var weddings = prompt('Have I been a part of at least a dozen marriages?').toLowerCase();
    console.log(user + ' answered ' + weddings + ' to question number 2.');
    if (weddings === 'yes' || weddings === 'y'){
        userPoints++;
        alert('Correct, Besides being married three times, I have officiated at least ten weddings, You now have ' + userPoints + ' points!');
    } else {
        alert('Sorry, I have been a part of at least a dozen marriages.  Besides being married three times, I have officiated at least ten weddings, You now have ' + userPoints + ' points!');
    }
}

function questionThree(){
    var military = prompt('Did I serve in the Navy for 14 years?').toLowerCase();
    console.log(user + ' answered ' + military + ' to question number 3.');
    if (military === 'no' || military === 'n'){
        userPoints++;
        alert('Correct, I did not serve in the Navy for 14 years, I served in the Air Force, and the Arizona Air National Guard for 31 years. You now have ' + userPoints + ' points!');
    } else {
        alert('Sorry, I did not serve in the Navy for 14 years, I served in the Air Force, and the Arizona Air National Guard for 31 years. You now have ' + userPoints + ' points!');
    }
}

function questionFour(){
    var pilot = prompt('Am I a pilot?').toLowerCase();
    console.log(user + ' answered ' + pilot + ' to question number 4.');
    if (pilot === 'yes' || pilot === 'y'){
        userPoints++;
        alert('Correct, I was not a pilot in the military, but I did get my pilots licence. You now have ' + userPoints + ' points!');
    } else {
        alert('Sorry, I did get my pilots licence, although I did not fly for the military. You now have ' + userPoints + ' points!');
    }
}

function questionFive(){
    var countries = prompt('Have I been to eight foreign countries?').toLowerCase();
    console.log(user + ' answered ' + countries + ' to question number 5.');
    if (countries === 'no' || countries === 'n'){
        userPoints++;
        alert('Correct, I have only been to Canada and Mexico and neither one with the military. You now have ' + userPoints + ' points!');
    } else {
        alert('Sorry, I have only been to Canada and Mexico and neither one with the military. You now have ' + userPoints + ' points!');
    }  
}

function questionSix(){
    var favoriteNumber = 143;
    var attempts = 1;
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
        userPoints++;
        alert('Congratulations, you have guessed correctly, very impresive. You now have ' + userPoints + ' points!');
    } else {
        alert('You were unable to guess my favorite number, it is ' + favoriteNumber + '.  You now have ' + userPoints + ' points!');
    }
}

function questionSeven(){
    var guesses = 1;
    var i = 0;
    var correctAnswer = false;
    var states =['new jersey', 'arizona', 'colorado', 'arkansas', 'missouri'];
    var chosenState = prompt('I have lived in five states besides Washington, can you guess any of them?  I\'ll give you seven tries this time.').toLowerCase();
        while (( guesses < 7 ) && ( correctAnswer === false )) {  
            console.log(user +' has guessed ' + chosenState + ' for guess #' + guesses);    
            while ((chosenState != states[i]) && (i < states.length)) {            
            i++; 
            } 
                if (chosenState === states[i]) {
                    correctAnswer = true;
                } else {
                    var chosenState = prompt('Sorry, that was guess #' + guesses + ', please try again.').toLowerCase();
                i = 0;
                }
            guesses++   
        }
    if (correctAnswer == true) {
        userPoints++;
        alert('Great job, you got that right, besides Washington, I have lived in New Jersey, Arizona, Missouri, Colorado, and Arkansas.');
    } else {
        alert('Sorry, besides Washington, I have lived in New Jersey, Arizona, Colorado, and Arkansas.');
    }
}

function pointSummary(){
    if (userPoints < 3){
        alert('You only received ' + userPoints + ' points out of 7, better luck next time ' + user + '.');
    } else if(userPoints < 5){
        alert('Not to shabby ' + user + ', you got ' + userPoints + ' out of 7.');
    } else if(userPoints < 7){
        alert('Nice ' + user + ', you got ' + userPoints + ' out of 7, good job!');
    } else {        
        alert('Amazing job ' + user + ', you got all 7 questions correct. Have we met before?');
    }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
pointSummary();

} else {
    alert('I\'m sorry to hear that, see you around.')
}