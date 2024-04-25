//Q1
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = true;
    }
  
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
  }
  
  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = new Date(rentalStartDate);
      this.rentalEndDate = new Date(rentalEndDate);
    }
  
    calculateRentalDuration() {
      const oneDay = 24 * 60 * 60 * 1000;
      const diffDays = Math.round(Math.abs((this.rentalEndDate - this.rentalStartDate) / oneDay));
      return diffDays;
    }
  }
  let myCar = new Car("Toyota", "Camry", 2020);
  
  let myRental = new Rental(myCar, "John Doe", "2024-04-01", "2024-04-10");

  let rentalDuration = myRental.calculateRentalDuration();
  console.log(`The rental duration is ${rentalDuration} days.`);

  //Q2

  class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }
}


const sampleQuestion = new Question(
    "What is the capital of France?",
    ["Paris", "London", "Berlin", "Madrid"],
    "Paris"
);

console.log(sampleQuestion.checkAnswer("Paris")); 
console.log(sampleQuestion.checkAnswer("London")); 

  
  
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
    }

    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
        this.nextQuestion();
    }
}

const quiz = new Quiz();

const question1 = new Question("What is 2 + 2?", ["3", "4", "5"], "4");
const question2 = new Question("Who wrote 'Romeo and Juliet'?", ["Shakespeare", "Hemingway", "Tolstoy"], "Shakespeare");

quiz.addQuestion(question1);
quiz.addQuestion(question2);

quiz.submitAnswer("4"); 
quiz.submitAnswer("Shakespeare"); 

console.log("Score:", quiz.score);

 
  
  