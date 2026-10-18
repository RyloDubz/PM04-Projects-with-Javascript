# The Super Collider Game Show

A beginner-friendly general knowledge quiz made with HTML, CSS and JavaScript. It uses a purple-and-gold game-show design and has no sound or music.

## Features

- 5 questions in each category: Sport, Movies & TV, and History.
- 15 main questions in total, with 20 seconds for each question.
- One surprise animal-trivia round called **Red Panda Roll Call!**
- Main questions are worth 1 point each; a correct bonus answer is worth 2 points.
- Maximum score: **17 points**.
- Shuffled questions and answers, one 50:50 lifeline, streak counter and final rank.
- Saves the player's personal-best score in the browser when storage is available.
- Responsive purple-and-gold design, with no audio.

## Project files

- `index.html` — the page and quiz screens.
- `style.css` — the colours, layout, fonts and mobile styling.
- `script.js` — questions, timer, answers, score and bonus round.

## How to run

1. Keep all three files in the same folder.
2. Open `index.html` in a browser. You can also use Live Server in Visual Studio Code.
3. Select **Let's Play** and answer before the timer runs out.

## Latest changes

- Reduced each category from 8 questions to 5.
- Reduced the main quiz from 24 questions to 15.
- Updated the maximum score from 26 to 17 points.
- Updated the bonus-round timing so it fits the shorter quiz.
- Adjusted score ranks and results text for the new total.
- Added short comments in the HTML, CSS and JavaScript to explain key parts of the code.
- Kept the wider layout, eye-catching headings, lifeline, streaks, bonus round and no-audio requirement.

## Quick testing checklist

- Start the game and check that the counter says 15 questions.
- Answer a question correctly, incorrectly and after the timer runs out.
- Try the 50:50 lifeline.
- Confirm the bonus round appears once and gives 2 points for a correct answer.
- Finish the quiz and confirm the maximum score is 17.
- Restart the quiz and check that it works again.

## Suggested GitHub commit message

`Reduce quiz to five questions per category and update README`
