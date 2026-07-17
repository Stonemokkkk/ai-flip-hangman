# AI Flip Hangman

A classic 5-letter English Hangman game with the visual feeling of a physical wooden flip-board toy.

## Preview

Bright yellow wooden board with blue top banner, red and blue flip letter tiles, chunky white letters, and a cute character reveal board.

## How to Run

1. Open `index.html` in any modern web browser
2. No server required - works offline
3. Mobile-first design, works great on phones

```bash
# On Ubuntu/Mac
open index.html

# Or simply double-click the file
```

## Features

- 90 English words (30 Easy, 30 Medium, 30 Hard)
- Wooden flip-board toy visual style
- Cute character reveal (not scary!)
- AI-style hint system with 3 levels
- Scoring system with difficulty bonuses
- Keyboard input support (A-Z)
- Mobile-friendly touch targets
- Win/lose screens with word meaning and example
- Smooth animations (flip, bounce, shake)

## Game Rules

1. Guess the 5-letter English word
2. Tap a letter or press A-Z on keyboard
3. Correct letters reveal in position (green)
4. Wrong letters show a body part
5. 6 wrong guesses = game over
6. Win by revealing all letters before 6 mistakes

## Scoring

| Action | Points |
|--------|--------|
| Correct word | +100 |
| Each remaining life | +20 |
| Extra hint used | -10 |
| Hard mode win | +50 bonus |

## Difficulty Levels

- **Easy**: Common words, direct hints
- **Medium**: Everyday words, moderate hints
- **Hard**: Challenging words, indirect hints

## Tech Stack

- HTML5
- CSS3 (with CSS variables)
- Vanilla JavaScript
- No external dependencies

## File Structure

```
ai-flip-hangman/
├── index.html      # Main HTML structure
├── style.css       # Wooden toy visual design
├── script.js       # Game logic and word library
└── README.md       # This file
```

## Next Steps

1. Add real AI hints via OpenRouter/Gemini/OpenAI API
2. Daily challenge mode
3. Leaderboard with local storage
4. Sound effects
5. More word categories
6. React + TypeScript upgrade

## License

Free to use and modify.
