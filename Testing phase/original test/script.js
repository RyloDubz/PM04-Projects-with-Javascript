
const questions = [
  // SPORT: 6 questions
  {
    category: "SPORT",
    question: "Which country won the men's FIFA World Cup in 2014?",
    answers: ["Argentina", "Germany", "Brazil", "Spain"],
    correct: 1,
    explanation: "Germany defeated Argentina 1–0 in the final."
  },
  {
    category: "SPORT",
    question: "In tennis, what is the term for winning all four major singles titles in the same calendar year?",
    answers: ["Golden Slam", "Career Slam", "Calendar Grand Slam", "Triple Crown"],
    correct: 2,
    explanation: "A Calendar Grand Slam means winning all four majors in one calendar year."
  },
  {
    category: "SPORT",
    question: "Which country has won the most men's 50-over Cricket World Cups through 2023?",
    answers: ["India", "West Indies", "England", "Australia"],
    correct: 3,
    explanation: "Australia won the men's Cricket World Cup six times by the end of 2023."
  },
  {
    category: "SPORT",
    question: "In Formula One, what colour flag traditionally signals the end of a race?",
    answers: ["Black", "Chequered", "Yellow", "Green"],
    correct: 1,
    explanation: "The chequered flag signals the end of a race or qualifying session."
  },
  {
    category: "SPORT",
    question: "Which athlete won the men's 100 metres at the 2008 Beijing Olympics?",
    answers: ["Tyson Gay", "Asafa Powell", "Usain Bolt", "Justin Gatlin"],
    correct: 2,
    explanation: "Usain Bolt won in a then-world-record time of 9.69 seconds."
  },
  {
    category: "SPORT",
    question: "How many players from one team are on court in a standard indoor volleyball match?",
    answers: ["Five", "Six", "Seven", "Eight"],
    correct: 1,
    explanation: "Each indoor volleyball team has six players on court."
  },

  // MOVIES & TV: 6 questions
  {
    category: "MOVIES & TV",
    question: "Which film won the Academy Award for Best Picture at the 2020 ceremony?",
    answers: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
    correct: 2,
    explanation: "Parasite won Best Picture at the 92nd Academy Awards."
  },
  {
    category: "MOVIES & TV",
    question: "In The Lord of the Rings films, what is the name of the kingdom ruled by Théoden?",
    answers: ["Gondor", "Rohan", "Mordor", "Dale"],
    correct: 1,
    explanation: "Théoden is the king of Rohan."
  },
  {
    category: "MOVIES & TV",
    question: "Who directed the 1994 film Pulp Fiction?",
    answers: ["Martin Scorsese", "David Fincher", "Quentin Tarantino", "Oliver Stone"],
    correct: 2,
    explanation: "Quentin Tarantino wrote and directed Pulp Fiction."
  },
  {
    category: "MOVIES & TV",
    question: "What is the name of the coffee shop regularly visited by the friends in Friends?",
    answers: ["Central Perk", "Coffee Bean", "Monk's Café", "Café Nervosa"],
    correct: 0,
    explanation: "Central Perk is the group's familiar New York coffee shop."
  },
  {
    category: "MOVIES & TV",
    question: "Which actor played Maximus in the 2000 film Gladiator?",
    answers: ["Gerard Butler", "Russell Crowe", "Mel Gibson", "Eric Bana"],
    correct: 1,
    explanation: "Russell Crowe played Maximus Decimus Meridius."
  },
  {
    category: "MOVIES & TV",
    question: "In Breaking Bad, what alias does Walter White use?",
    answers: ["Lalo", "Nacho", "Heisenberg", "Tuco"],
    correct: 2,
    explanation: "Walter White uses the name Heisenberg in the drug trade."
  },

  // HISTORY: 6 questions
  {
    category: "HISTORY",
    question: "In which year did the Berlin Wall fall?",
    answers: ["1987", "1988", "1989", "1991"],
    correct: 2,
    explanation: "The Berlin Wall opened on 9 November 1989."
  },
  {
    category: "HISTORY",
    question: "Who was the first Roman emperor?",
    answers: ["Julius Caesar", "Augustus", "Nero", "Tiberius"],
    correct: 1,
    explanation: "Augustus became the first Roman emperor in 27 BCE."
  },
  {
    category: "HISTORY",
    question: "Which civilisation built the ancient city of Machu Picchu?",
    answers: ["Aztec", "Maya", "Inca", "Olmec"],
    correct: 2,
    explanation: "Machu Picchu was built by the Inca in the Andes of modern-day Peru."
  },
  {
    category: "HISTORY",
    question: "The Battle of Waterloo took place in which year?",
    answers: ["1805", "1812", "1815", "1821"],
    correct: 2,
    explanation: "Napoleon was defeated at Waterloo in 1815."
  },
  {
    category: "HISTORY",
    question: "Who was the first woman to win a Nobel Prize?",
    answers: ["Ada Lovelace", "Marie Curie", "Florence Nightingale", "Lise Meitner"],
    correct: 1,
    explanation: "Marie Curie won the Nobel Prize in Physics in 1903."
  },
  {
    category: "HISTORY",
    question: "Which empire was ruled by Mansa Musa in the 14th century?",
    answers: ["Mali Empire", "Ottoman Empire", "Mughal Empire", "Byzantine Empire"],
    correct: 0,
    explanation: "Mansa Musa ruled the Mali Empire in West Africa."
  }
];

// The animal question is randomly selected each game.
const animalQuestions = [
  {
    question: "Which mammal is famous for producing cube-shaped droppings?",
    answers: ["Koala", "Wombat", "Capybara", "Badger"],
    correct: 1,
    explanation: "Wombats produce cube-shaped droppings, which can help mark their territory."
  },
  {
    question: "What is the only group of mammals capable of true powered flight?",
    answers: ["Flying squirrels", "Sugar gliders", "Bats", "Colugos"],
    correct: 2,
    explanation: "Bats actively fly using their wings; flying squirrels and gliders glide."
  },
  {
    question: "Which animal has three hearts?",
    answers: ["Octopus", "Dolphin", "Crocodile", "Penguin"],
    correct: 0,
    explanation: "An octopus has three hearts: two pump blood to the gills and one to the body."
  },
  {
    question: "What is a group of flamingos commonly called?",
    answers: ["A parliament", "A flamboyance", "A crash", "A murder"],
    correct: 1,
    explanation: "A group of flamingos is commonly called a flamboyance."
  },
  {
    question: "Which bird can fly backwards?",
    answers: ["Albatross", "Hummingbird", "Peregrine falcon", "Ostrich"],
    correct: 1,
    explanation: "Hummingbirds can fly backwards thanks to the movement of their wings."
  },
  {
    question: "Which animal has fingerprints that can resemble human fingerprints?",
    answers: ["Koala", "Tiger", "Meerkat", "Red fox"],
    correct: 0,
    explanation: "Koala fingerprints can look remarkably similar to human fingerprints."
  },
  {
    question: "What is the largest living species of lizard?",
    answers: ["Green iguana", "Komodo dragon", "Nile monitor", "Gila monster"],
    correct: 1,
    explanation: "The Komodo dragon is the largest living lizard species."
  },
  {
    question: "Which marine animal has blue blood because it uses a copper-based oxygen-carrying pigment?",
    answers: ["Great white shark", "Blue whale", "Horseshoe crab", "Sea turtle"],
    correct: 2,
    explanation: "Horseshoe crabs use copper-based hemocyanin, which makes their blood blue."
  },
  {
    question: "What is a baby echidna called?",
    answers: ["A joey", "A puggle", "A cub", "A kit"],
    correct: 1,
    explanation: "A baby echidna is called a puggle."
  },
  {
    question: "Which animal is known for having the longest gestation period of any land mammal?",
    answers: ["African elephant", "Giraffe", "Black rhinoceros", "Hippopotamus"],
    correct: 0,
    explanation: "African elephants have a gestation period of about 22 months."
  }
];

const $ = (id) => document.getElementById(id);

const screens = [
  "home-screen",
  "quiz-screen",
  "bonus-screen",
  "bonus-question-screen",
  "results-screen"
];

let currentQuestion = 0;
let score = 0;
let correctMain = 0;
let bonusPlayed = false;
let bonusAwarded = false;
let bonusAt = 0;
let bonusQuestion = null;
let locked = false;
let timer = null;
let timeLeft = 20;

function showScreen(id) {
  screens.forEach((screenId) => {
    $(screenId).classList.toggle("active", screenId === id);
  });
}

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function updateScore() {
  $("score").textContent = score;
}

function startGame() {
  clearInterval(timer);

  currentQuestion = 0;
  score = 0;
  correctMain = 0;
  bonusPlayed = false;
  bonusAwarded = false;
  locked = false;

  // Shuffle questions within each category but keep the categories in order.
  const sport = shuffle(questions.filter(q => q.category === "SPORT"));
  const movies = shuffle(questions.filter(q => q.category === "MOVIES & TV"));
  const history = shuffle(questions.filter(q => q.category === "HISTORY"));

  gameQuestions = [...sport, ...movies, ...history];

  // The bonus appears after a random question between 3 and 16.
  bonusAt = Math.floor(Math.random() * 14) + 3;

  updateScore();
  showQuestion();
}

let gameQuestions = [];

function showQuestion() {
  clearInterval(timer);
  locked = false;

  if (currentQuestion >= gameQuestions.length) {
    showResults();
    return;
  }

  const q = gameQuestions[currentQuestion];

  $("category-label").textContent = q.category;
  $("question-counter").textContent =
    `QUESTION ${currentQuestion + 1} OF ${gameQuestions.length}`;
  $("question-text").textContent = q.question;
  $("feedback").textContent = "";
  $("next-btn").hidden = true;

  renderAnswers(q, false);

  timeLeft = 20;
  updateTimerDisplay();
  showScreen("quiz-screen");
  startTimer();
}

function renderAnswers(q, isBonus) {
  const container = $(isBonus ? "bonus-answers" : "answers");
  container.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

    button.addEventListener("click", () => {
      selectAnswer(index, q, isBonus);
    });

    container.appendChild(button);
  });
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      if (!locked) {
        handleTimeout();
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  $("timer-text").textContent = `${timeLeft} seconds`;
  $("timer-bar").style.width = `${Math.max(0, timeLeft / 20 * 100)}%`;
}

function handleTimeout() {
  locked = true;
  const q = gameQuestions[currentQuestion];
  const buttons = $("answers").querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === q.correct) button.classList.add("correct");
  });

  $("feedback").textContent = `Time's up! ${q.explanation}`;
  $("next-btn").hidden = false;
}

function selectAnswer(index, q, isBonus) {
  if (locked) return;

  locked = true;
  clearInterval(timer);

  const container = $(isBonus ? "bonus-answers" : "answers");
  const buttons = container.querySelectorAll("button");
  const feedback = $(isBonus ? "bonus-feedback" : "feedback");

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;

    if (buttonIndex === q.correct) {
      button.classList.add("correct");
    }
  });

  if (index === q.correct) {
    buttons[index].classList.add("correct");
    feedback.textContent = `Correct! ${q.explanation}`;

    if (isBonus) {
      score += 2;
      bonusAwarded = true;
    } else {
      score++;
      correctMain++;
    }
  } else {
    buttons[index].classList.add("wrong");
    feedback.textContent = `Not quite! ${q.explanation}`;
  }

  updateScore();

  if (isBonus) {
    $("bonus-next-btn").hidden = false;
  } else {
    $("next-btn").hidden = false;
  }
}

function nextQuestion() {
  currentQuestion++;

  if (!bonusPlayed && currentQuestion === bonusAt) {
    bonusPlayed = true;
    showScreen("bonus-screen");
    return;
  }

  showQuestion();
}

function startBonusRound() {
  bonusQuestion = animalQuestions[
    Math.floor(Math.random() * animalQuestions.length)
  ];

  locked = false;
  $("bonus-feedback").textContent = "";
  $("bonus-next-btn").hidden = true;
  $("bonus-question-text").textContent = bonusQuestion.question;

  renderAnswers(bonusQuestion, true);
  showScreen("bonus-question-screen");
}

function returnToQuiz() {
  showQuestion();
}

function showResults() {
  clearInterval(timer);
  showScreen("results-screen");

  $("final-score").textContent = score;
  $("result-heading").textContent = "QUIZ COMPLETE!";
  $("result-details").textContent =
    `Main quiz: ${correctMain} / 18 correct. ` +
    (bonusPlayed
      ? `Bonus round: ${bonusAwarded ? "2 bonus points earned!" : "No bonus points this time."}`
      : "The hidden bonus round stayed hidden!");

  if (score >= 18) {
    $("result-message").textContent =
      "Outstanding! You've absolutely conquered the impossible!";
  } else if (score >= 13) {
    $("result-message").textContent =
      "Impressive work! You've got serious general knowledge.";
  } else if (score >= 8) {
    $("result-message").textContent =
      "Not bad! But the impossible quiz has more tricks up its sleeve.";
  } else {
    $("result-message").textContent =
      "That was tough! Take a breath and challenge yourself again.";
  }
}

$("start-btn").addEventListener("click", startGame);
$("next-btn").addEventListener("click", nextQuestion);
$("bonus-start-btn").addEventListener("click", startBonusRound);
$("bonus-next-btn").addEventListener("click", returnToQuiz);
$("restart-btn").addEventListener("click", startGame);