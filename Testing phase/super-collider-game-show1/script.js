/* THE SUPER COLLIDER GAME SHOW
   Change notes:
   - Rebranded the original Impossible Quiz while keeping its core three categories.
   - Expanded the game to 8 questions per category (24 main questions total).
   - Added shuffled questions and answer choices, a 50:50 lifeline, streaks, a warning timer,
     a random Red Panda Roll Call bonus round, score ranks, and a saved best score.
   - No audio APIs, sound files, music, or sound effects are used. */

const MAIN_TIME = 20;
const MAX_SCORE = 26; // 24 main points + 2 bonus points.

// Each answer is stored as text, not an option index, so answer shuffling stays accurate.
const questionBank = {
  Sport: [
    { question: "Which country won the first men's FIFA World Cup in 1930?", options: ["Brazil", "Uruguay", "Italy", "Argentina"], answer: "Uruguay", explanation: "Uruguay hosted and won the inaugural men's FIFA World Cup in 1930." },
    { question: "In tennis, what does a score of 'love' mean?", options: ["One point", "A tied game", "Zero", "A penalty"], answer: "Zero", explanation: "In tennis scoring, 'love' means zero points." },
    { question: "How many players from one football team are normally on the pitch at kick-off?", options: ["9", "10", "11", "12"], answer: "11", explanation: "A standard football team fields eleven players, including the goalkeeper." },
    { question: "Which country hosted the 2016 Summer Olympic Games?", options: ["China", "Brazil", "Greece", "Japan"], answer: "Brazil", explanation: "The 2016 Summer Olympics were held in Rio de Janeiro, Brazil." },
    { question: "Which sport uses the terms 'strike', 'spare' and 'turkey'?", options: ["Cricket", "Golf", "Bowling", "Baseball"], answer: "Bowling", explanation: "These are scoring terms used in ten-pin bowling." },
    { question: "How long is an official marathon?", options: ["21.1 km", "40 km", "42.195 km", "50 km"], answer: "42.195 km", explanation: "The official marathon distance is 42.195 kilometres." },
    { question: "In rugby union, how many points is a try worth under the modern standard scoring system?", options: ["3", "5", "6", "7"], answer: "5", explanation: "A try is worth five points; a conversion can add two more." },
    { question: "Which chess piece moves in an L-shape?", options: ["Bishop", "Rook", "Knight", "Queen"], answer: "Knight", explanation: "The knight moves two squares in one direction and one square perpendicular to it." }
  ],
  "Movies & TV": [
    { question: "Who played Jack Dawson in the 1997 film Titanic?", options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Matt Damon"], answer: "Leonardo DiCaprio", explanation: "Leonardo DiCaprio played Jack Dawson opposite Kate Winslet as Rose." },
    { question: "Which film won Best Picture at the 2020 Academy Awards?", options: ["Joker", "1917", "Parasite", "Jojo Rabbit"], answer: "Parasite", explanation: "Parasite became the first non-English-language film to win the Best Picture Oscar." },
    { question: "What is the name of the fictional school in the Harry Potter series?", options: ["Nevermore Academy", "Hogwarts", "Brakebills", "Ilvermorny University"], answer: "Hogwarts", explanation: "Harry Potter attends Hogwarts School of Witchcraft and Wizardry." },
    { question: "Which actor portrayed Iron Man in the Marvel Cinematic Universe?", options: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Robert Downey Jr."], answer: "Robert Downey Jr.", explanation: "Robert Downey Jr. played Tony Stark, also known as Iron Man." },
    { question: "In The Lion King, what is Simba's father's name?", options: ["Scar", "Mufasa", "Rafiki", "Zazu"], answer: "Mufasa", explanation: "Mufasa is Simba's father and the king at the start of the story." },
    { question: "Which TV series features the fictional continent of Westeros?", options: ["The Witcher", "Vikings", "Game of Thrones", "The Last Kingdom"], answer: "Game of Thrones", explanation: "Game of Thrones is largely set in Westeros and Essos." },
    { question: "Who directed Jaws, E.T. and Jurassic Park?", options: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"], answer: "Steven Spielberg", explanation: "Steven Spielberg directed all three films." },
    { question: "What is the name of the coffee shop regularly visited by the friends in Friends?", options: ["Central Perk", "Coffee Bean", "Monk's Café", "MacLaren's Pub"], answer: "Central Perk", explanation: "Central Perk is the group's familiar coffee shop in Friends." }
  ],
  History: [
    { question: "Which ancient civilisation built the Great Pyramid of Giza?", options: ["Romans", "Ancient Egyptians", "Persians", "Ancient Greeks"], answer: "Ancient Egyptians", explanation: "The Great Pyramid was built for Pharaoh Khufu during Egypt's Old Kingdom." },
    { question: "In which year did World War II end?", options: ["1918", "1939", "1945", "1950"], answer: "1945", explanation: "World War II ended in 1945, following Germany's surrender in May and Japan's surrender in September." },
    { question: "Who was the first President of the United States?", options: ["John Adams", "Thomas Jefferson", "George Washington", "Abraham Lincoln"], answer: "George Washington", explanation: "George Washington served as the first US president from 1789 to 1797." },
    { question: "Who was known as the 'Iron Lady' in British politics?", options: ["Theresa May", "Margaret Thatcher", "Queen Victoria", "Indira Gandhi"], answer: "Margaret Thatcher", explanation: "Margaret Thatcher was widely known by the nickname 'Iron Lady'." },
    { question: "Which document was sealed by King John of England in 1215?", options: ["Bill of Rights", "Magna Carta", "Domesday Book", "Act of Union"], answer: "Magna Carta", explanation: "Magna Carta was agreed in 1215 and placed limits on royal authority." },
    { question: "Which city was divided by a wall during the Cold War?", options: ["Vienna", "Berlin", "Prague", "Warsaw"], answer: "Berlin", explanation: "The Berlin Wall divided East and West Berlin from 1961 until 1989." },
    { question: "Who was the first person to walk on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], answer: "Neil Armstrong", explanation: "Neil Armstrong stepped onto the Moon during Apollo 11 in July 1969." },
    { question: "The ancient city of Carthage was located in what is now which country?", options: ["Tunisia", "Egypt", "Greece", "Turkey"], answer: "Tunisia", explanation: "Ancient Carthage stood near modern Tunis in present-day Tunisia." }
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
  // Randomise the 24 main questions while keeping all categories represented.
  questions = shuffle(Object.entries(questionBank).flatMap(([category, list]) =>
    list.map((item) => ({ ...item, category }))
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
  // The surprise appears after a random main question between 3 and 21.
  bonusAt = Math.floor(Math.random() * 19) + 3;
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

function showResults() {
  stopTimer();
  showScreen("results-screen");
  $("progress-bar").style.width = "100%";
  $("final-score").textContent = score;
  const percentage = Math.round((score / MAX_SCORE) * 100);
  let rank = "QUIZ ROOKIE";
  let message = "The Super Collider got the better of you this time. Ready for a rematch?";
  if (score >= 23) { rank = "SUPER COLLIDER LEGEND"; message = "Outstanding! Your general knowledge is in a league of its own."; }
  else if (score >= 18) { rank = "QUIZ SHOW CHAMPION"; message = "Excellent performance. You handled the pressure like a pro."; }
  else if (score >= 12) { rank = "KNOWLEDGE CONTENDER"; message = "Solid work! You know your stuff, but there's still room to climb."; }
  else if (score >= 6) { rank = "RISING CHALLENGER"; message = "You've got a foundation. Take another shot and beat your score."; }
  $("result-rank").textContent = rank;
  $("result-message").textContent = message;
  $("result-details").textContent = `You answered ${mainCorrect} of 24 main questions correctly, achieved a best streak of ${bestStreak}, and scored ${percentage}% of the available points.`;
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
