/* THE SUPER COLLIDER GAME SHOW
   Change notes:
   - Rebranded the original Impossible Quiz while keeping its core three categories.
   - Stores 20 main questions and selects 8 balanced random questions per game.
   - Added shuffled questions and answer choices, a 50:50 lifeline, streaks, a warning timer,
     a random Red Panda Roll Call bonus round, score ranks, and a saved best score.
   - No audio APIs, sound files, music, or sound effects are used. */

const MAIN_TIME = 20;
const MAIN_QUESTION_COUNT = 8;
const MAX_SCORE = 10; // 8 main points + 2 bonus points.

// The backend holds 20 main questions. Each game uses a balanced random selection:
// 3 Sport, 3 Movies & TV, and 2 History questions, shuffled into a new order.
const questionBank = {
  Sport: [
    { question: "Which country won the first men's FIFA World Cup in 1930?", options: ["Brazil", "Uruguay", "Italy", "Argentina"], answer: "Uruguay", explanation: "Uruguay hosted and won the inaugural men's FIFA World Cup in 1930." },
    { question: "In tennis, what does a score of 'love' mean?", options: ["One point", "A tied game", "Zero", "A penalty"], answer: "Zero", explanation: "In tennis scoring, 'love' means zero points." },
    { question: "How many players from one team are on the field in a standard soccer match?", options: ["9", "10", "11", "12"], answer: "11", explanation: "A standard soccer team has 11 players on the field, including the goalkeeper." },
    { question: "Which sport uses the terms birdie and eagle?", options: ["Golf", "Cricket", "Rugby", "Hockey"], answer: "Golf", explanation: "Birdie and eagle describe scores below par on a golf hole." },
    { question: "How long is a standard Olympic swimming pool?", options: ["25 metres", "50 metres", "75 metres", "100 metres"], answer: "50 metres", explanation: "Olympic long-course swimming pools are 50 metres long." },
    { question: "In rugby union, how many points is a try worth?", options: ["3", "5", "6", "7"], answer: "5", explanation: "A try in rugby union is worth five points." },
    { question: "Which country is associated with the martial art taekwondo?", options: ["Japan", "China", "South Korea", "Thailand"], answer: "South Korea", explanation: "Taekwondo originated in Korea and is South Korea's national martial art." }
  ],
  "Movies & TV": [
    { question: "Who played Jack Dawson in the 1997 film Titanic?", options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Matt Damon"], answer: "Leonardo DiCaprio", explanation: "Leonardo DiCaprio played Jack Dawson opposite Kate Winslet as Rose." },
    { question: "Which film won Best Picture at the 2020 Academy Awards?", options: ["Joker", "1917", "Parasite", "Jojo Rabbit"], answer: "Parasite", explanation: "Parasite became the first non-English-language film to win the Best Picture Oscar." },
    { question: "What is the name of the school Harry Potter attends?", options: ["Beauxbatons", "Hogwarts", "Durmstrang", "Ilvermorny"], answer: "Hogwarts", explanation: "Harry Potter attends Hogwarts School of Witchcraft and Wizardry." },
    { question: "In Friends, what is the name of Ross's sister?", options: ["Phoebe", "Rachel", "Monica", "Janice"], answer: "Monica", explanation: "Monica Geller is Ross Geller's younger sister." },
    { question: "Which actor played Iron Man in the Marvel Cinematic Universe?", options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], answer: "Robert Downey Jr.", explanation: "Robert Downey Jr. portrayed Tony Stark, also known as Iron Man." },
    { question: "What is the fictional African nation in Black Panther called?", options: ["Genovia", "Wakanda", "Zamunda", "Latveria"], answer: "Wakanda", explanation: "Wakanda is the fictional nation at the centre of Black Panther." },
    { question: "Which animated film features the song 'Let It Go'?", options: ["Moana", "Tangled", "Frozen", "Brave"], answer: "Frozen", explanation: "'Let It Go' is the signature song performed by Elsa in Disney's Frozen." }
  ],
  History: [
    { question: "Which ancient civilisation built the Great Pyramid of Giza?", options: ["Romans", "Ancient Egyptians", "Persians", "Ancient Greeks"], answer: "Ancient Egyptians", explanation: "The Great Pyramid was built for Pharaoh Khufu during Egypt's Old Kingdom." },
    { question: "In which year did World War II end?", options: ["1918", "1939", "1945", "1950"], answer: "1945", explanation: "World War II ended in 1945, following Germany's surrender in May and Japan's surrender in September." },
    { question: "Who was the first person to walk on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], answer: "Neil Armstrong", explanation: "Neil Armstrong stepped onto the Moon in July 1969 during Apollo 11." },
    { question: "The ancient city of Pompeii was buried after the eruption of which volcano?", options: ["Etna", "Vesuvius", "Krakatoa", "Stromboli"], answer: "Vesuvius", explanation: "Mount Vesuvius erupted in AD 79, burying Pompeii and nearby settlements." },
    { question: "Who was South Africa's first democratically elected president?", options: ["Thabo Mbeki", "F. W. de Klerk", "Nelson Mandela", "Jacob Zuma"], answer: "Nelson Mandela", explanation: "Nelson Mandela became South Africa's first democratically elected president in 1994." },
    { question: "Which wall fell in 1989, becoming a symbol of the end of the Cold War?", options: ["Hadrian's Wall", "The Great Wall", "Berlin Wall", "Wailing Wall"], answer: "Berlin Wall", explanation: "The Berlin Wall opened in November 1989, marking a major turning point in European history." }
  ]
};

// The bonus pool is sampled randomly; only one animal question appears in a round.
const bonusBank = [
  { question: "What is the main natural habitat of the red panda?", options: ["African savannas", "Himalayan forests", "Arctic tundra", "South American wetlands"], answer: "Himalayan forests", explanation: "Red pandas live in temperate forests across parts of the Himalayas and nearby mountain regions." },
  { question: "What is a group of flamingos commonly called?", options: ["A parade", "A flamboyance", "A parliament", "A pod"], answer: "A flamboyance", explanation: "A group of flamingos is commonly called a flamboyance." },
  { question: "Which animal is famous for having three hearts?", options: ["Octopus", "Sea turtle", "Penguin", "Dolphin"], answer: "Octopus", explanation: "An octopus has three hearts: two pump blood to the gills and one to the rest of the body." },
  { question: "What is the only mammal capable of true sustained flight?", options: ["Flying squirrel", "Sugar glider", "Bat", "Colugo"], answer: "Bat", explanation: "Bats are the only mammals capable of powered, sustained flight." },
  { question: "Which bird is known for being able to mimic human speech especially well?", options: ["Ostrich", "African grey parrot", "Flamingo", "Puffin"], answer: "African grey parrot", explanation: "African grey parrots are known for advanced vocal mimicry and learning sounds." },
  { question: "What is the largest species of big cat alive today?", options: ["Lion", "Jaguar", "Leopard", "Tiger"], answer: "Tiger", explanation: "The tiger is the largest living big cat species." },
  { question: "Which sea creature has blue blood due to copper-based hemocyanin?", options: ["Horseshoe crab", "Great white shark", "Manatee", "Sea otter"], answer: "Horseshoe crab", explanation: "Horseshoe crabs use copper-based hemocyanin, which gives their blood a blue colour." },
  { question: "What do koalas mainly eat?", options: ["Bamboo", "Eucalyptus leaves", "Grass", "Seaweed"], answer: "Eucalyptus leaves", explanation: "Koalas feed mainly on eucalyptus leaves." },
  { question: "Which animal is famous for changing colour to help with camouflage and communication?", options: ["Chameleon", "Meerkat", "Capybara", "Armadillo"], answer: "Chameleon", explanation: "Chameleons can change colour for communication, temperature regulation and camouflage." },
  { question: "What is a baby swan called?", options: ["Calf", "Fawn", "Cygnet", "Chicklet"], answer: "Cygnet", explanation: "A young swan is called a cygnet." }
];

const $ = (id) => document.getElementById(id);
const screens = ["home-screen", "quiz-screen", "bonus-screen", "bonus-question-screen", "results-screen"];
let questions = [];
let currentIndex = 0;
let score = 0;
let secondsLeft = MAIN_TIME;
let timerId = null;
let answered = false;
let streak = 0;
let bestStreak = 0;
let lifelineUsed = false;
let bonusUsed = false;
let bonusQuestion = null;
let bonusAt = 0;
let mainCorrect = 0;

// Fisher-Yates shuffle avoids the predictable ordering of a simple sort-based shuffle.
function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(screenId) {
  screens.forEach((id) => $(id).classList.toggle("active", id === screenId));
}

function stopTimer() {
  if (timerId !== null) clearInterval(timerId);
  timerId = null;
}

function prepareGame() {
  // Pick a balanced set of eight from the 20-question bank, then shuffle their order.
  // Each round has 3 Sport, 3 Movies & TV and 2 History questions.
  const categoryCounts = { Sport: 3, "Movies & TV": 3, History: 2 };
  questions = shuffle(Object.entries(questionBank).flatMap(([category, list]) =>
    shuffle(list).slice(0, categoryCounts[category]).map((item) => ({ ...item, category }))
  ));
  // Choose one bonus question, then shuffle only its options without losing its answer.
  const selectedBonus = shuffle(bonusBank)[0];
  bonusQuestion = { ...selectedBonus, options: shuffle(selectedBonus.options) };
  currentIndex = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  lifelineUsed = false;
  bonusUsed = false;
  mainCorrect = 0;
  // Show the bonus after a random main question, between questions 2 and 7.
  bonusAt = Math.floor(Math.random() * 6) + 2;
  updateScore();
  updateStreak();
  $("lifeline-btn").disabled = false;
  $("lifeline-status").textContent = "50:50 AVAILABLE";
  showScreen("quiz-screen");
  renderQuestion();
}

function updateScore() {
  $("score").textContent = score;
}

function updateStreak() {
  $("streak-display").textContent = `STREAK: ${streak}`;
}

// Show the current question and start its 20-second timer.
function renderQuestion() {
  stopTimer();
  answered = false;
  secondsLeft = MAIN_TIME;
  const item = questions[currentIndex];
  $("category-label").textContent = item.category.toUpperCase();
  $("question-counter").textContent = `QUESTION ${currentIndex + 1} OF ${questions.length}`;
  $("question-text").textContent = item.question;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("next-btn").hidden = true;
  $("lifeline-btn").hidden = lifelineUsed;
  $("progress-bar").style.width = `${(currentIndex / questions.length) * 100}%`;
  renderAnswers(item, "answers", false);
  updateTimerDisplay();
  timerId = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    if (secondsLeft <= 0) answerMain(null, true);
  }, 1000);
}

function renderAnswers(item, containerId, isBonus) {
  const container = $(containerId);
  container.replaceChildren();
  // Option order changes each time, and the correct answer is matched by its text.
  const options = shuffle(item.options);
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.dataset.answer = option;
    const key = document.createElement("span");
    key.className = "answer-key";
    key.textContent = String.fromCharCode(65 + index);
    const label = document.createElement("span");
    label.textContent = option;
    button.append(key, label);
    button.addEventListener("click", () => isBonus ? answerBonus(option) : answerMain(option, false));
    container.appendChild(button);
  });
}

function updateTimerDisplay() {
  $("timer-text").textContent = `${secondsLeft} second${secondsLeft === 1 ? "" : "s"}`;
  $("timer-bar").style.width = `${Math.max(0, (secondsLeft / MAIN_TIME) * 100)}%`;
  $("timer-bar").classList.toggle("warning", secondsLeft <= 5);
}

// Check the answer, update the score and show feedback.
function answerMain(selected, timedOut) {
  if (answered) return;
  answered = true;
  stopTimer();
  const item = questions[currentIndex];
  const correct = selected === item.answer;
  const buttons = [...$("answers").querySelectorAll("button")];
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === item.answer) button.classList.add("correct");
    if (selected !== null && button.dataset.answer === selected && !correct) button.classList.add("wrong");
  });
  if (correct) {
    score++;
    mainCorrect++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
    $("feedback").textContent = `Correct! ${item.explanation}`;
    $("feedback").classList.add("good");
  } else {
    streak = 0;
    const opening = timedOut ? "Time's up!" : "Not quite.";
    $("feedback").textContent = `${opening} The answer is ${item.answer}. ${item.explanation}`;
    $("feedback").classList.add("bad");
  }
  updateScore();
  updateStreak();
  $("lifeline-btn").hidden = true;
  $("next-btn").textContent = currentIndex === questions.length - 1 ? "FINAL RESULTS →" : "NEXT QUESTION →";
  $("next-btn").hidden = false;
}

// The 50:50 lifeline hides two incorrect answers.
function useLifeline() {
  if (lifelineUsed || answered) return;
  lifelineUsed = true;
  $("lifeline-btn").disabled = true;
  $("lifeline-btn").hidden = true;
  $("lifeline-status").textContent = "50:50 USED";
  const correct = questions[currentIndex].answer;
  const wrongButtons = shuffle([...$("answers").querySelectorAll("button")].filter((button) => button.dataset.answer !== correct));
  // Hide two wrong choices but keep the correct answer and one distractor.
  wrongButtons.slice(0, 2).forEach((button) => { button.hidden = true; });
}

function nextQuestion() {
  if (!answered) return;
  if (!bonusUsed && currentIndex + 1 === bonusAt) {
    showScreen("bonus-screen");
    return;
  }
  currentIndex++;
  if (currentIndex >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function startBonus() {
  showScreen("bonus-question-screen");
  $("bonus-question-text").textContent = bonusQuestion.question;
  $("bonus-feedback").textContent = "";
  $("bonus-feedback").className = "feedback";
  $("bonus-next-btn").hidden = true;
  renderAnswers(bonusQuestion, "bonus-answers", true);
}

function answerBonus(selected) {
  if (bonusUsed) return;
  bonusUsed = true;
  const correct = selected === bonusQuestion.answer;
  [...$("bonus-answers").querySelectorAll("button")].forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === bonusQuestion.answer) button.classList.add("correct");
    if (button.dataset.answer === selected && !correct) button.classList.add("wrong");
  });
  if (correct) {
    score += 2;
    $("bonus-feedback").textContent = `Two points! ${bonusQuestion.explanation}`;
    $("bonus-feedback").classList.add("good");
  } else {
    $("bonus-feedback").textContent = `No bonus points this time. The answer is ${bonusQuestion.answer}. ${bonusQuestion.explanation}`;
    $("bonus-feedback").classList.add("bad");
  }
  updateScore();
  $("bonus-next-btn").hidden = false;
}

function returnFromBonus() {
  // Resume at the next main question; the bonus cannot appear a second time.
  currentIndex++;
  if (currentIndex >= questions.length) showResults();
  else { showScreen("quiz-screen"); renderQuestion(); }
}

// Show the final score, rank and saved personal best.
function showResults() {
  stopTimer();
  showScreen("results-screen");
  $("progress-bar").style.width = "100%";
  $("final-score").textContent = score;
  const percentage = Math.round((score / MAX_SCORE) * 100);
  let rank = "QUIZ ROOKIE";
  let message = "The Super Collider got the better of you this time. Ready for a rematch?";
  if (score >= 9) { rank = "SUPER COLLIDER LEGEND"; message = "Outstanding! Your general knowledge is in a league of its own."; }
  else if (score >= 7) { rank = "QUIZ SHOW CHAMPION"; message = "Excellent performance. You handled the pressure like a pro."; }
  else if (score >= 5) { rank = "KNOWLEDGE CONTENDER"; message = "Solid work! You know your stuff, but there's still room to climb."; }
  else if (score >= 3) { rank = "RISING CHALLENGER"; message = "You've got a foundation. Take another shot and beat your score."; }
  $("result-rank").textContent = rank;
  $("result-message").textContent = message;
  $("result-details").textContent = `You answered ${mainCorrect} of ${MAIN_QUESTION_COUNT} main questions correctly, achieved a best streak of ${bestStreak}, and scored ${percentage}% of the available points.`;
  // CHANGE: Best score persists between visits in this browser. Guard storage in case it is blocked.
  let best = score;
  try {
    const previousBest = Number(localStorage.getItem("superColliderBestScore") || 0);
    best = Math.max(previousBest, score);
    localStorage.setItem("superColliderBestScore", String(best));
  } catch (error) { /* Storage is optional; the quiz still works without it. */ }
  $("best-score").textContent = `PERSONAL BEST: ${best} / ${MAX_SCORE}`;
}

function restartGame() {
  stopTimer();
  $("timer-bar").classList.remove("warning");
  showScreen("home-screen");
  updateScore();
}

$("start-btn").addEventListener("click", prepareGame);
$("next-btn").addEventListener("click", nextQuestion);
$("lifeline-btn").addEventListener("click", useLifeline);
$("bonus-start-btn").addEventListener("click", startBonus);
$("bonus-next-btn").addEventListener("click", returnFromBonus);
$("restart-btn").addEventListener("click", restartGame);
