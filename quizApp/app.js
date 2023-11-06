var obj = [
    {
        questtion: "What is the capital of France?",
        a: "Madrid",
        b: "Berlin",
        c: "Paris",
        d: "Rome",
        answer: "Paris",
    },

    {
        questtion: " Which planet is known as the Red Planet",
        a: "Venus",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        answer: "Mars",
    },   
    
    {
        questtion: "How many continents are there on Earth?",
        a: 5,
        b: 6,
        c: 8,
        d: 7,
        answer: 7,
    },  
    
    {
        questtion: "Who wrote the play Romeo and Juliet?",
        a: "Charles Dickens",
        b: "William Wordsworth",
        c: "William Shakespeare",
        d: "Jane Austen",
        answer: "William Shakespeare",
    }, 
    
    {
        questtion: "What is the chemical symbol for gold?",
        a: "Go",
        b: "Ag",
        c: "Ge",
        d: "Au",
        answer: "Au",
    },  
    
    {
        questtion: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Giraffe",
        c: "Lion",
        d: "Blue Whale",
        answer: "Blue Whale",
    }, 

    {
        questtion: "What is the symbol for the element oxygen on the periodic table?",
        a: "Oz",
        b: "Ox",
        c: "O",
        d: "O2",
        answer: "O",
    }, 

    {
        questtion: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        a: "O2",
        b: "CO2",
        c: "N2",
        d: "H2",
        answer: "CO2",
    }, 

    {
        questtion: " Who is known as the father of modern physics?",
        a: " Isaac Newton",
        b: "Galileo Galilei",
        c: "Albert Einstein",
        d: "Stephen Hawking",
        answer: "Albert Einstein",
    }, 

    {
        questtion: "What is the smallest prime number?",
        a: 1,
        b: 2,
        c: 3,
        d: 0,
        answer: 2,
    }, 
    
    {
        questtion: "What is the largest organ in the human body?",
        a: "Heart",
        b: "Brain",
        c: "Lungs",
        d: "Skin",
        answer: "Skin",
    }, 

    {
        questtion: "In which year did Christopher Columbus discover America?",
        a: 1492,
        b: 1776,
        c: 1620,
        d: 1789,
        answer: 1492,
    }, 

    {
        questtion: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        answer: "Leonardo da Vinci",
    }, 

    {
        questtion: "What is the chemical symbol of water?",
        a: "H2O",
        b: "W",
        c: "H2",
        d: "H2O2",
        answer: "H2O",
    }, 

    {
        questtion: "How many sides does a hexagon have?",
        a: 4,
        b: 6,
        c: 5,
        d: 9,
        answer: 6,
    }, 

    {
        questtion: "What is the national flower of Japan?",
        a: "Tulip",
        b: "Rose",
        c: "Sun Flower",
        d: "Cherry blossom",
        answer: "Cherry blossom",
    }, 

    {
        questtion: "Who is the author of The Great Gatsby?",
        a: "F. Scott Fitzgerald",
        b: "Ernest Hemingway",
        c: "Mark Twain",
        d: " Charles Dickens",
        answer: "F. Scott Fitzgerald",
    }, 

    {
        questtion: " Which gas do plants release during photosynthesis?",
        a: "O2",
        b: "CO2",
        c: "NH4",
        d: "CH4",
        answer: "O2",
    }, 

    {
        questtion: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Venus",
        c: "Jupiter",
        d: "Mars",
        answer: "Jupiter",
    }, 

    {
        questtion: "Who is the Greek god of the sea?",
        a: " Zeus",
        b: "Apollo",
        c: "Hermes",
        d: "Poseidon",
        answer: "Poseidon",
    }, 
]

var index = 0;
var score = 0;
var counter;

function renderQuestion(){
    var questions = document.getElementById("quizQuestion");
    var options = document.getElementsByName("option");
    var nextButton =document.getElementById("nextButton");
    var countDown = document.getElementById("timer");
    var timeValue = 15;
    clearInterval(counter);
    for (var i =0; i < options.length; i++) {

        if(options[i].checked) {
            nextButton.disabled = true;
            if(options[i].value === obj[index-1].answer) {
              score++;
            } 
        }
      
        if(!obj[index]) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `You scored ${score} out of 20`,
                showConfirmButton: true,
                
              });
            return;
        }
       
    }

    function startTimer(time) {
        counter = setInterval(timer, 1000);
        function timer() {
          countDown.textContent = time;
          time--;
          if (time < 0) {
            clearInterval(counter);
            renderQuestion();
          }
        }
      }

    

    questions.innerHTML = `<h1>Simple Quiz</h1>
        <div class="quiz">
        <h2 style="margin:20px 4px" id="question">${obj[index].questtion}</h2>

        <div class="answer-buttons">
             
        <div class="0ne">
              <label><input type="radio" onclick="enableButton()" name ="option" value="${obj[index].a}">${obj[index].a}</label>
              </div>

              <div class="0ne">
              <label><input type="radio" onclick="enableButton()" name ="option" value="${obj[index].b}">${obj[index].b}</label>
              </div>
              
              <div class="0ne">
              <label><input type="radio" onclick="enableButton()" name ="option" value="${obj[index].c}">${obj[index].c}</label>
              </div>

              <div class="0ne">
              <label><input type="radio" onclick="enableButton()" name ="option" value="${obj[index].d}">${obj[index].d}</label>
              </div>
        </div>

    </div>`

    startTimer(timeValue);
    //   clearInterval(counter);

    // setTimeout(renderQuestion, 2000);
    index++;
}

renderQuestion();



function enableButton() {
    nextButton.disabled = false;

}  


function redirection() {
    window.location.href = "./form.html"
}

  function logOut() {

   localStorage.clear();

   setTimeout(redirection, 1000);
}


// setTimeout(registerPage, 2000);