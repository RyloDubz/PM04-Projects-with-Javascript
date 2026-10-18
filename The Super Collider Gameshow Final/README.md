# The Super Collider Game Show

A beginner-friendly general knowledge quiz made with HTML, CSS and JavaScript. It uses a purple-and-gold game-show design and has no sound or music.

## How each game works

- The backend question bank contains **20 main questions** across Sport, Movies & TV, and History.
- Every game selects **8 randomized main questions** from the pool: 3 Sport, 3 Movies & TV, and 2 History, in a shuffled order.
- Each main question has a 20-second timer and is worth 1 point.
- A randomized animal-trivia bonus question appears once per game in **Red Panda Roll Call!** and is worth 2 extra points.
- Maximum score: **10 points** (8 main points + 2 bonus points).
- The animal bonus question is selected randomly from a separate pool of questions.
- Answer choices are shuffled, and the game includes a 50:50 lifeline, streak counter, final rank, and saved personal-best score.
- Restarting the game creates a fresh randomized set of questions and selects a new bonus question.
- Responsive purple-and-gold design, with no audio.

## Project files

- `index.html` — the page and quiz screens.
- `style.css` — the colours, layout, fonts and mobile styling.
- `script.js` — the 20-question bank, randomized selection, timer, answers, score and bonus round.

## How to run

1. Keep all three files in the same folder.
2. Open `index.html` in a browser. You can also use Live Server in Visual Studio Code.
3. Select **Let's Play** and answer before the timer runs out.
4. When one player finishes, select **Play Again** for a new randomized set for the next player.

## Latest changes

- Expanded the main question bank from 6 questions to 20 across all three categories.
- Each game now draws 8 randomized main questions while keeping a balanced category mix (3 Sport, 3 Movies & TV, 2 History).
- Kept the random animal bonus question and its 2-point value; the maximum possible score is now 10.
- Updated the question counter, score displays, results details, ranks and welcome-screen text to match the new rules.
- Kept the 20-second timer, 50:50 lifeline, streaks, purple-and-gold styling and no-audio requirement.

## Quick testing checklist

- Start a game and check the counter says **QUESTION 1 OF 8**.
- Confirm each game contains 3 Sport, 3 Movies & TV and 2 History questions.
- Restart and check that a new randomized selection can appear.
- Answer a main question correctly, incorrectly and after the timer runs out.
- Try the 50:50 lifeline.
- Confirm one random animal bonus question appears and a correct answer adds 2 points.
- Finish the game and confirm the maximum score display is **10 points**.
- Confirm the results say 8 main questions were played and restart works for the next player.

## Suggested GitHub commit message

`Add 20-question pool with randomized eight-question games`
