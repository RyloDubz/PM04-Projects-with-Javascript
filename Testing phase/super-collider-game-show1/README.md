# The Super Collider Game Show

A responsive, browser-based general knowledge quiz built with HTML, CSS and vanilla JavaScript. It uses a purple-and-gold television game-show style and deliberately contains **no sounds or audio playback**.

## Features

- Three categories: Sport, Movies & TV, and History.
- Eight main questions per category (24 main questions total).
- A 20-second countdown for each main question, with a visual warning during the final five seconds.
- Randomised main-question order and shuffled answer choices on each playthrough.
- Instant correct/incorrect feedback and answer explanations.
- One 50:50 lifeline per game.
- Streak counter and final performance rank.
- One randomly selected animal question in the **Red Panda Roll Call!** bonus round, appearing after a random main question.
- Main answers are worth 1 point; a correct bonus answer is worth 2 points. Maximum score: 26.
- Personal-best score saved in the browser when local storage is available.
- Responsive styling and reduced-motion support.
- No music, sound effects, audio files or audio APIs.

## Project files

- `index.html` — screen structure and page content.
- `style.css` — purple-and-gold design, responsive layout, answer states and timer styling.
- `script.js` — question bank, shuffle logic, timer, scoring, lifeline, bonus round and results.

## How to run

1. Keep all three files in the same folder.
2. Open `index.html` in a modern web browser, or use the VS Code Live Server extension.
3. Select **Let's Play** and answer each question before the timer expires.

## Latest update — The Super Collider rebrand

- Renamed the project from The Impossible Quiz to The Super Collider Game Show.
- Preserved the three original categories and expanded the game to eight questions per category.
- Added a shuffled question order, shuffled answer options, a 50:50 lifeline, streak tracking, final-five-second timer warning, performance ranks and browser-based personal-best tracking.
- Kept the Red Panda Roll Call bonus round and its two-point reward.
- Confirmed that no sound or audio feature is included.

## Suggested testing

- Start and restart the quiz several times; verify questions and answer positions shuffle.
- Check correct answers, incorrect answers and timeouts.
- Use the 50:50 lifeline and confirm it can only be used once per round.
- Confirm the Red Panda Roll Call round appears once, at a random point, and awards two points only for a correct answer.
- Confirm the maximum score shown is 26 and the result rank changes with the score.
- Test on a narrow/mobile browser and check the browser console for errors.

## Suggested commit message

`Rebrand quiz as The Super Collider Game Show`
