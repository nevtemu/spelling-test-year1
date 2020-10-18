const questions = [
  ["I", "__ am Bogdana"],
  ["no", "Do you want candy? __"],
  ["so", "this words are __ hard"],
  ["go", "I __ to school"],
  ["oh no!", "___ I ate all candies"],
  ["people", "I made friends with many ___"],
  ["Mr", "__ Matthew"],
  ["Mrs", "__ Soroka"],
  ["Miss", "__ Sophie"],
  ["could", "I never thought I ___ do it"],
  ["should", "We ___ go to the park tomorrow"],
  ["would", "___ you like something to drink? "][("was", "She __ tall")],
  ["because", " I want to go to Hawaii ___ it's warm and beautiful"],
  ["to", "I go __ school"],
  ["do", "I __ my homework"],
  ["into", " Jonathan came ___ the room"],
  ["her", "Everyone liked ___ dress"],
  ["here", "We live ___"],
  ["were", "They ___ happy"],
  ["are", "We __ family"],
  ["our", "This is __ family"],
  ["father", "Then ___ checked my homework"],
  ["mother", "Yesterday ___ cooked delicious food"],
  ["brother", "I want little ___"],
  ["sister", "Sofia is my ____"],
  ["the", "Give me ___ book"],
  ["they", "But __ were tired"],
  ["their", " The red one is ___ house "],
  ["there", "___ is a flower on the table"],
  ["of", " Please give me a cup __ milk "],
  ["off", "Switch ___"],
  ["to", "I go __ school"],
  ["too", " The load was __ heavy / I'm a student __ "],
  ["when", "___ is your birthday?"],
  ["who", "__ took my pen?"],
  ["where", "___ do you live?"],
  ["why", "__ you are sad?"],
  ["what", "___ is your name?"],
  ["which", "___ shoes will you wear?"],
  ["my", "This is __ cat"],
  ["try", "I want to ___ this cake"],
  ["cry", "Babies __"],
  ["sky", "There are many clouds in the __"],
  ["said", "He __ goodbye"],
  ["again", "I want to go there ___"],
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
  ["ten", "10"],
  ["all", "Teacher counted ___ pupils"],
  ["ball", "I have a big __"],
  ["small", "There was a ___ toy"],
  ["goes", "He ___ to school"],
  ["does", "She ___ her homework"],
  ["shoes", "I like my pink ___"],
  ["me", "Give it to __"],
  ["we", "Yesterday ___ went to park"],
  ["he", "Then __ jumped"],
  ["she", "Now ___ speaks Arabic"],
  ["be", "I want to __ gymnastics champion"],
  ["come", "Please __ inside"],
  ["some", "Give me ___ time"],
  ["you", "I love __"],
  ["your", "I like ___ dress"],
  ["out", "She went ___ "][("about", "Story ___ cat")],
  ["call", "I __ her every day"],
  ["ask", "Children __ teacher every day"],
  ["look", "I __ into the window now"],
  ["like", "I __ gymnastics"],
  ["called", "He ___ his mother"],
  ["asked", "Teacher ___ children last week"],
  ["looked", "I __ at the board yesterday"],
  ["liked", "Children ___ school trip"]
];

let totalyAnswered = 0;
let correct = 0;
let question;
let answer;
const previousQuestions = [,,,,,];

const talk = () => {
    let voice = new SpeechSynthesisUtterance(question);
    window.speechSynthesis.speak(voice);
}
const checkAnswer = () => {
  if (document.getElementById("answer").value){//is there an answer?
      answer = document.getElementById("answer").value;
      if (answer == question) {//correct answer
          correct++;
          document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden")    
          document.getElementsByClassName("fa-thumbs-up")[0].style.color = "green"
          document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")
      } else { //wrong answer
          document.getElementById("textMistakes").innerHTML+=question + " ";
          document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden") 
          document.getElementsByClassName("fa-thumbs-up")[0].style.color = "red"
          document.getElementsByClassName("fa-thumbs-up")[0].classList.add("fa-flip-vertical") 
          document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")    
      }
      totalyAnswered++; //this is answers statistics
      document.getElementById("totalyAnswered").innerHTML = "Answered questions: " + totalyAnswered;
      document.getElementById("corectAnswers").innerHTML = "Correct answers: " + Math.floor((correct / totalyAnswered) * 100) + "%";
    }
}
const askQuestion =()=> {
    document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")
    document.getElementsByClassName("fa-thumbs-up")[0].classList.remove("fa-flip-vertical") 
    document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden")   
    document.getElementById("answer").value = "";
    let n // index of question in questions array
    do {n = getRandomNumber(0, questions.length); //to perform this task at least once
        question = questions[n][0];} 
    while (previousQuestions.includes(question))
    document.getElementById("hint").innerHTML = questions[n][1]; //display hint
    previousQuestions.push(question); //track previous questions to avoid reapeted questions
    previousQuestions.shift();
}
const getRandomNumber = (min,max) => Math.floor(Math.random()*(max-min+1))+min;
askQuestion();
