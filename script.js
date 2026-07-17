// ===========================
// AI Flip Hangman - Game Logic
// ===========================

// Word Library (90 words: 30 Easy, 30 Medium, 30 Hard)
const WORD_LIBRARY = [
    // === EASY (30) ===
    { word: "APPLE", category: "Food", difficulty: "easy", hints: { easy: ["This is a fruit.", "It can be red or green.", "It grows on trees."], medium: ["Often found in lunchboxes.", "A common healthy snack.", "Associated with orchards."], hard: ["Linked to a famous gravity story.", "Popular in pies and juice.", "A symbol used by a famous tech brand."] }, meaning: "A round fruit with red, green, or yellow skin.", example: "I eat an apple every morning." },
    { word: "BREAD", category: "Food", difficulty: "easy", hints: { easy: ["You eat this for breakfast.", "It is made from flour.", "It comes in slices."], medium: ["Often toasted in the morning.", "A staple in many cultures.", "Comes in loaves."], hard: ["The basis of many sandwiches.", "Can be whole wheat or white.", "Bakers make this daily."] }, meaning: "A food made from flour, water, and yeast.", example: "Please pass me a slice of bread." },
    { word: "CHAIR", category: "Furniture", difficulty: "easy", hints: { easy: ["You sit on this.", "It has four legs.", "Found in every room."], medium: [" Comes in many styles.", "Can be made of wood or plastic.", "Offices have many of these."], hard: ["Essential for dining rooms.", "Can rock back and forth.", "Designed for one person."] }, meaning: "A piece of furniture for one person to sit on.", example: "Please take a seat on this chair." },
    { word: "CLOCK", category: "Object", difficulty: "easy", hints: { easy: ["It tells time.", "It has numbers 1 to 12.", "It ticks every second."], medium: ["Found on walls and wrists.", "Can be analog or digital.", "Helps you stay on schedule."], hard: ["Has hour and minute hands.", "Essential for punctuality.", "Some chime on the hour."] }, meaning: "A device that shows the time.", example: "The clock on the wall says it is noon." },
    { word: "CLOUD", category: "Nature", difficulty: "easy", hints: { easy: ["It floats in the sky.", "It is white or grey.", "Rain comes from these."], medium: ["Made of water droplets.", "Blocks the sun sometimes.", "Comes in many shapes."], hard: ["Cumulus clouds look fluffy.", "Can predict the weather.", "Found in the troposphere."] }, meaning: "A visible mass of water droplets in the sky.", example: "Look at that big cloud!" },
    { word: "DREAM", category: "Abstract", difficulty: "easy", hints: { easy: ["You do this while sleeping.", "Can be good or bad.", "Happens at night."], medium: ["Your brain creates stories.", "Sometimes you forget them.", "Can feel very real."] }, meaning: "A series of images and sensations during sleep.", example: "I had a strange dream last night." },
    { word: "DRINK", category: "Action", difficulty: "easy", hints: { easy: ["You do this with water.", "Uses your mouth.", "Keeps you healthy."], medium: ["Can be hot or cold.", "Use a glass or cup.", "Important for survival."] }, meaning: "To take liquid into the mouth and swallow.", example: "Please drink some water." },
    { word: "EARTH", category: "Nature", difficulty: "easy", hints: { easy: ["This is our planet.", "It is round.", "Mostly blue from space."], medium: ["Humans live here.", "Has land and water.", "One of eight planets."] }, meaning: "The planet on which we live.", example: "The Earth goes around the sun." },
    { word: "FLOOR", category: "Object", difficulty: "easy", hints: { easy: ["You walk on this.", "It is at the bottom of a room.", "Can be wood or tile."], medium: ["Found in every building.", "You stand on it.", "Can be carpeted."] }, meaning: "The lower surface of a room.", example: "The toy is on the floor." },
    { word: "FRUIT", category: "Food", difficulty: "easy", hints: { easy: ["It is sweet and healthy.", "Grows on trees or plants.", "Comes in many colors."], medium: ["Examples include apple and banana.", "Contains vitamins.", "Part of a balanced diet."] }, meaning: "The sweet, fleshy product of a plant.", example: "I love to eat fresh fruit." },
    { word: "GRAPE", category: "Food", difficulty: "easy", hints: { easy: ["Small and round fruit.", "Comes in bunches.", "Can be purple or green."], medium: ["Used to make wine.", "Grows on vines.", "Very popular snack."] }, meaning: "A small, round fruit growing in clusters.", example: "These grapes are delicious!" },
    { word: "GREEN", category: "Color", difficulty: "easy", hints: { easy: ["This is a color.", "Grass is this color.", "Leaves are this color."], medium: ["Between blue and yellow.", "Associated with nature.", "A traffic light color."] }, meaning: "The color of grass and leaves.", example: "The frog is bright green." },
    { word: "HAPPY", category: "Emotion", difficulty: "easy", hints: { easy: ["This is a feeling.", "You smile when you feel this.", "Opposite of sad."], medium: ["A positive emotion.", "Comes from good things.", "Makes you feel good."] }, meaning: "Feeling pleasure and contentment.", example: "She is very happy today." },
    { word: "HOUSE", category: "Building", difficulty: "easy", hints: { easy: ["People live in this.", "Has a roof and walls.", "Has doors and windows."], medium: ["Can be big or small.", "A place you call home.", "Found on streets."] }, meaning: "A building for human habitation.", example: "Our house has three bedrooms." },
    { word: "HUMAN", category: "Being", difficulty: "easy", hints: { easy: ["This is what you are.", "Walks on two legs.", "Can talk and think."], medium: ["A type of animal.", "Lives in societies.", "Has hands and feet."] }, meaning: "A member of the species Homo sapiens.", example: "Humans are very clever." },
    { word: "JUICE", category: "Drink", difficulty: "easy", hints: { easy: ["A drink from fruit.", "Can be orange or apple.", "Sweet and refreshing."], medium: ["Found in cartons.", "Kids love this.", "Healthy and tasty."] }, meaning: "A drink made from the liquid of fruit.", example: "Can I have some orange juice?" },
    { word: "LIGHT", category: "Object", difficulty: "easy", hints: { easy: ["It helps you see.", "Comes from the sun or a bulb.", "Opposite of dark."] }, meaning: "The natural agent that makes things visible.", example: "Please turn on the light." },
    { word: "MANGO", category: "Food", difficulty: "easy", hints: { easy: ["A tropical fruit.", "Orange and sweet.", "Grows in warm places."], medium: ["Popular in summer.", "Has a big seed inside.", "Used in smoothies."] }, meaning: "A tropical fruit with sweet orange flesh.", example: "I love eating fresh mango." },
    { word: "MONEY", category: "Object", difficulty: "easy", hints: { easy: ["You use this to buy things.", "Comes in coins and notes.", "Everyone wants more."] }, meaning: "A medium of exchange for goods and services.", example: "I need money to buy lunch." },
    { word: "MOUSE", category: "Animal", difficulty: "easy", hints: { easy: ["A small animal.", "Has a long tail.", "Likes cheese."] }, meaning: "A small rodent with a long tail.", example: "The mouse ran across the floor." },
    { word: "MUSIC", category: "Art", difficulty: "easy", hints: { easy: ["You hear this on the radio.", "Made with instruments.", "You can dance to it."] }, meaning: "Vocal or instrumental sounds combined to produce harmony.", example: "I love listening to music." },
    { word: "OCEAN", category: "Nature", difficulty: "easy", hints: { easy: ["Very big body of water.", "Has fish and waves.", "Salt water."] }, meaning: "A very large expanse of salt water.", example: "The ocean is so beautiful." },
    { word: "PARTY", category: "Event", difficulty: "easy", hints: { easy: ["A fun celebration.", "People gather together.", "There is cake and games."] }, meaning: "A social gathering for celebration.", example: "We had a great party last night." },
    { word: "PIZZA", category: "Food", difficulty: "easy", hints: { easy: ["Italian food.", "Round with toppings.", "Very popular worldwide."] }, meaning: "A dish of Italian origin with a flat base and toppings.", example: "Let's order pizza for dinner." },
    { word: "PLANE", category: "Vehicle", difficulty: "easy", hints: { easy: ["Flies in the sky.", "Has wings.", "Carries many passengers."] }, meaning: "A powered flying vehicle with fixed wings.", example: "The plane takes off at noon." },
    { word: "PLANT", category: "Nature", difficulty: "easy", hints: { easy: ["Grows in soil.", "Needs water and sunlight.", "Makes oxygen."] }, meaning: "A living organism that grows in the ground.", example: "I water my plants every day." },
    { word: "QUEEN", category: "Person", difficulty: "easy", hints: { easy: ["A female ruler.", "Lives in a castle.", "Wears a crown."] }, meaning: "A female sovereign or monarch.", example: "The queen lives in a palace." },
    { word: "RIVER", category: "Nature", difficulty: "easy", hints: { easy: ["Water flows this way.", "Long and narrow.", "Fish swim in it."] }, meaning: "A large natural stream of water.", example: "We went fishing in the river." },
    { word: "SMILE", category: "Action", difficulty: "easy", hints: { easy: ["You do this when happy.", "Uses your mouth.", "Makes others happy too."] }, meaning: "To form one's features into a pleased expression.", example: "She has a beautiful smile." },
    { word: "TIGER", category: "Animal", difficulty: "easy", hints: { easy: ["A big cat.", "Has orange and black stripes.", "Very strong."] }, meaning: "A large wild cat with orange and black stripes.", example: "The tiger is a powerful animal." },

    // === MEDIUM (30) ===
    { word: "BEACH", category: "Place", difficulty: "medium", hints: { easy: ["Where sand meets the sea.", "You swim and sunbathe here.", "Has waves and shells."] }, meaning: "A sandy or pebbly shore by the ocean.", example: "We spent the day at the beach." },
    { word: "BRAVE", category: "Trait", difficulty: "medium", hints: { easy: ["Not afraid of danger.", "Heroes are this.", "Courageous."] }, meaning: "Ready to face danger or pain; courageous.", example: "The brave firefighter saved the cat." },
    { word: "BRICK", category: "Material", difficulty: "medium", hints: { easy: ["Used to build walls.", "Made of clay.", "Rectangular block."] }, meaning: "a block of fired clay used in building.", example: "The wall is made of red brick." },
    { word: "BRAIN", category: "Body", difficulty: "medium", hints: { easy: ["Inside your head.", "Controls your body.", "Helps you think."] }, meaning: "The organ inside the head that controls the body.", example: "Use your brain to solve the puzzle." },
    { word: "CROWN", category: "Object", difficulty: "medium", hints: { easy: ["Worn by kings and queens.", "Made of gold.", "Has jewels."] }, meaning: "A circular ornamental headdress worn by royalty.", example: "The queen wore a golden crown." },
    { word: "DANCE", category: "Action", difficulty: "medium", hints: { easy: ["Moving to music.", "Couples do this.", "Can be slow or fast."] }, meaning: "To move rhythmically to music.", example: "They dance together every Friday." },
    { word: "DRIVE", category: "Action", difficulty: "medium", hints: { easy: ["You do this with a car.", "Needs a license.", "On the road."] }, meaning: "To operate a vehicle.", example: "I drive to work every morning." },
    { word: "EAGLE", category: "Animal", difficulty: "medium", hints: { easy: ["A large bird.", "Very sharp eyes.", "Symbol of freedom."] }, meaning: "A large bird of prey with broad wings.", example: "The eagle soared high in the sky." },
    { word: "FLAME", category: "Nature", difficulty: "medium", hints: { easy: ["Part of fire.", "Can be orange or blue.", "Gives heat and light."] }, meaning: "A hot glowing body of ignited gas.", example: "The flame of the candle flickered." },
    { word: "FRESH", category: "Adjective", difficulty: "medium", hints: { easy: ["Not old or stale.", "New and clean.", "Like fresh air."] }, meaning: "Recently made or obtained; not stale.", example: "These vegetables are very fresh." },
    { word: "GHOST", category: "Supernatural", difficulty: "medium", hints: { easy: ["A spirit of the dead.", "People dress as this for Halloween.", "Scares people."] }, meaning: "The spirit of a dead person.", example: "The old house is said to have a ghost." },
    { word: "GRASS", category: "Nature", difficulty: "medium", hints: { easy: ["Green ground cover.", "Cows eat this.", "You mow this."] }, meaning: "A common plant with narrow green leaves.", example: "The grass needs cutting." },
    { word: "HEART", category: "Body", difficulty: "medium", hints: { easy: ["Pumps blood.", "Symbol of love.", "Beats in your chest."] }, meaning: "The organ that pumps blood through the body.", example: "My heart beats fast when I run." },
    { word: "HONEY", category: "Food", difficulty: "medium", hints: { easy: ["Made by bees.", "Sweet and golden.", "Used as a sweetener."] }, meaning: "A sweet sticky substance made by bees.", example: "I put honey in my tea." },
    { word: "HORSE", category: "Animal", difficulty: "medium", hints: { easy: ["People ride this.", "Has four legs.", "Neighs."] }, meaning: "A large four-legged animal used for riding.", example: "The horse ran very fast." },
    { word: "KNIFE", category: "Object", difficulty: "medium", hints: { easy: ["Used to cut things.", "Has a sharp blade.", "Found in kitchens."] }, meaning: "A tool or weapon with a sharp blade.", example: "Be careful with that knife." },
    { word: "LUNCH", category: "Meal", difficulty: "medium", hints: { easy: ["Eaten in the middle of the day.", "Between breakfast and dinner.", "At school or work."] }, meaning: "A meal eaten in the middle of the day.", example: "What should we have for lunch?" },
    { word: "MAGIC", category: "Abstract", difficulty: "medium", hints: { easy: ["Wizards do this.", "Makes things disappear.", "Not real but fun."] }, meaning: "The power of apparently influencing events by mysterious forces.", example: "The magician performed amazing magic." },
    { word: "METAL", category: "Material", difficulty: "medium", hints: { easy: ["Hard and shiny material.", "Conducts electricity.", "Used for buildings."] }, meaning: "A solid material that conducts heat and electricity.", example: "The gate is made of metal." },
    { word: "NORTH", category: "Direction", difficulty: "medium", hints: { easy: ["A direction on a map.", "Opposite of south.", "Cold places are this way."] }, meaning: "The direction toward the north pole.", example: "We are traveling north." },
    { word: "PEACH", category: "Food", difficulty: "medium", hints: { easy: ["A fuzzy fruit.", "Pinkish-orange color.", "Sweet and juicy."] }, meaning: "A round juicy fruit with fuzzy skin.", example: "This peach is perfectly ripe." },
    { word: "PHONE", category: "Object", difficulty: "medium", hints: { easy: ["Used to make calls.", "Fits in your pocket.", "Has a screen."] }, meaning: "A device for voice communication.", example: "My phone is ringing." },
    { word: "POWER", category: "Abstract", difficulty: "medium", hints: { easy: ["Strength or energy.", "Electricity is this.", "Leaders have this."] }, meaning: "The ability to do or act on something.", example: "Knowledge is power." },
    { word: "PRIDE", category: "Emotion", difficulty: "medium", hints: { easy: ["Feeling good about yourself.", "Lions have a lot of this.", "Can be positive or negative."] }, meaning: "A feeling of deep pleasure from achievements.", example: "She takes pride in her work." },
    { word: "RADIO", category: "Object", difficulty: "medium", hints: { easy: ["Plays music and news.", "Uses airwaves.", "Before TV."] }, meaning: "A device for receiving radio signals.", example: "I listen to the radio every morning." },
    { word: "SCALE", category: "Object", difficulty: "medium", hints: { easy: ["Measures weight.", "Found in bathrooms.", "Fish have these too."] }, meaning: "An instrument for weighing.", example: "Step on the scale please." },
    { word: "SHINE", category: "Action", difficulty: "medium", hints: { easy: ["To give off light.", "The sun does this.", "Polished things do this."] }, meaning: "To give out or reflect bright light.", example: "The sun shines brightly today." },
    { word: "SHIRT", category: "Clothing", difficulty: "medium", hints: { easy: ["Worn on the upper body.", "Has buttons.", "Can be long or short sleeve."] }, meaning: "A garment for the upper body with a collar.", example: "He wore a blue shirt." },
    { word: "SLEEP", category: "Action", difficulty: "medium", hints: { easy: ["You do this at night.", "Rest your body.", "Dreams happen during this."] }, meaning: "To rest in a state of unconsciousness.", example: "I need eight hours of sleep." },
    { word: "SMART", category: "Trait", difficulty: "medium", hints: { easy: ["Very intelligent.", "Good at school.", "Clever thinking."] }, meaning: "Having or showing a high degree of mental acuity.", example: "She is very smart and creative." },

    // === HARD (30) ===
    { word: "CRYPT", category: "Place", difficulty: "hard", hints: { easy: ["Underground room.", "Found in old churches.", "Where bodies are kept."] }, meaning: "An underground vault or chamber.", example: "They discovered an ancient crypt." },
    { word: "FJORD", category: "Nature", difficulty: "hard", hints: { easy: ["A narrow sea inlet.", "Found in Norway.", "Between steep cliffs."] }, meaning: "A long narrow inlet with steep sides.", example: "The fjord was breathtakingly beautiful." },
    { word: "GLYPH", category: "Symbol", difficulty: "hard", hints: { easy: ["A carved symbol.", "Found on ancient stones.", "Like hieroglyphics."] }, meaning: "A carved symbol or character.", example: "The archaeologist studied the mysterious glyph." },
    { word: "JAZZY", category: "Adjective", difficulty: "hard", hints: { easy: ["Lively and colorful.", "Like jazz music.", "Bright and energetic."] }, meaning: "Having the qualities of jazz; lively.", example: "She wore a jazzy outfit." },
    { word: "KNACK", category: "Trait", difficulty: "hard", hints: { easy: ["A natural skill.", "Something you are good at.", "Talent for something."] }, meaning: "A natural skill at doing something.", example: "She has a knack for cooking." },
    { word: "NYMPH", category: "Mythology", difficulty: "hard", hints: { easy: ["A nature spirit.", "From Greek mythology.", "Lives in forests."] }, meaning: "A spirit of nature in Greek mythology.", example: "The nymph danced among the trees." },
    { word: "QUART", category: "Measurement", difficulty: "hard", hints: { easy: ["A unit of measurement.", "A quarter of a gallon.", "Used for liquids."] }, meaning: "A unit of liquid capacity equal to a quarter of a gallon.", example: "Please pour me a quart of milk." },
    { word: "VIXEN", category: "Animal", difficulty: "hard", hints: { easy: ["A female fox.", "Cunning animal.", "Reddish-brown fur."] }, meaning: "A female fox.", example: "The vixen protected her cubs." },
    { word: "WALTZ", category: "Dance", difficulty: "hard", hints: { easy: ["A type of dance.", "In 3/4 time.", "Elegant and graceful."] }, meaning: "A ballroom dance in triple time.", example: "They waltzed across the floor." },
    { word: "ZESTY", category: "Adjective", difficulty: "hard", hints: { easy: ["Full of energy.", "Like lemon flavor.", "Lively and exciting."] }, meaning: "Having great energy and enthusiasm.", example: "The zesty lemon sauce was delicious." },
    { word: "BLITZ", category: "Event", difficulty: "hard", hints: { easy: ["A sudden attack.", "Fast and intense.", "Like lightning."] }, meaning: "A sudden, energetic, or concerted effort.", example: "The team went on a marketing blitz." },
    { word: "CHASM", category: "Nature", difficulty: "hard", hints: { easy: ["A deep gap.", "In the ground.", "Hard to cross."] }, meaning: "A deep opening or gap.", example: "They carefully crossed the chasm." },
    { word: "DWARF", category: "Being", difficulty: "hard", hints: { easy: ["A small person.", "From fairy tales.", "Snow White had seven."] }, meaning: "A member of a mythical race of short people.", example: "The dwarf guarded the treasure." },
    { word: "EPOCH", category: "Time", difficulty: "hard", hints: { easy: ["A long period of time.", "In history.", "A new age."] }, meaning: "A period of time in history.", example: "We are living in a new epoch." },
    { word: "FLINT", category: "Material", difficulty: "hard", hints: { easy: ["A type of stone.", "Makes sparks.", "Used to start fires."] }, meaning: "A hard grey stone that produces sparks.", example: "He struck the flint to make fire." },
    { word: "HAVOC", category: "Abstract", difficulty: "hard", hints: { easy: ["Great destruction.", "Chaos and disorder.", "Causes damage."] }, meaning: "Widespread destruction or chaos.", example: "The storm wreaked havoc on the town." },
    { word: "INERT", category: "Adjective", difficulty: "hard", hints: { easy: ["Not active or moving.", "Chemically unreactive.", "Still and motionless."] }, meaning: "Lacking the ability to move or act.", example: "The gas is chemically inert." },
    { word: "JOUST", category: "Activity", difficulty: "hard", hints: { easy: ["A medieval contest.", "Knights on horses.", "Using lances."] }, meaning: "A combat between two mounted knights.", example: "The knights would joust at the tournament." },
    { word: "KIOSK", category: "Place", difficulty: "hard", hints: { easy: ["A small booth.", "Sells newspapers or snacks.", "Found on streets."] }, meaning: "A small open-fronted hut for business.", example: "I bought a coffee at the kiosk." },
    { word: "MIRTH", category: "Emotion", difficulty: "hard", hints: { easy: ["Great amusement.", "Laughter and joy.", "Happy feelings."] }, meaning: "Amusement and happiness.", example: "His jokes filled the room with mirth." },
    { word: "NEXUS", category: "Abstract", difficulty: "hard", hints: { easy: ["A connection or link.", "A central point.", "Where things meet."] }, meaning: "A connection or series of connections.", example: "The city is a nexus of commerce." },
    { word: "OZONE", category: "Science", difficulty: "hard", hints: { easy: ["A gas in the atmosphere.", "Protects from UV rays.", "Smells like thunderstorms."] }, meaning: "A colorless gas with a strong smell.", example: "The ozone layer protects the Earth." },
    { word: "PLAZA", category: "Place", difficulty: "hard", hints: { easy: ["An open public square.", "In a city center.", "People gather here."] }, meaning: "An open public space in a town.", example: "We met at the plaza." },
    { word: "QUELL", category: "Action", difficulty: "hard", hints: { easy: ["To put an end to.", "Suppress or calm.", "Stop something."] }, meaning: "To put an end to a rebellion or disorder.", example: "The police quelled the disturbance." },
    { word: "RHYME", category: "Language", difficulty: "hard", hints: { easy: ["Words that sound alike.", "Poetry uses this.", "Cat and hat do this."] }, meaning: "Correspondence of sound between words.", example: "The poem has a nice rhyme scheme." },
    { word: "SCALD", category: "Action", difficulty: "hard", hints: { easy: ["Burn with hot liquid.", "Like boiling water.", "Hurt your skin."] }, meaning: "To burn with hot liquid or steam.", example: "Be careful not to scald yourself." },
    { word: "THORN", category: "Nature", difficulty: "hard", hints: { easy: ["Sharp point on a plant.", "Hurts when you touch it.", "Roses have these."] }, meaning: "A sharp, pointed growth on a plant.", example: "A thorn pricked my finger." },
    { word: "UMBRA", category: "Science", difficulty: "hard", hints: { easy: ["The darkest part of a shadow.", "During an eclipse.", "Full shadow."] }, meaning: "The darkest part of a shadow.", example: "The moon's umbra fell on the Earth." },
    { word: "VIGOR", category: "Trait", difficulty: "hard", hints: { easy: ["Physical strength.", "Energy and force.", "Full of life."] }, meaning: "Physical strength and good health.", example: "She exercised with great vigor." },
    { word: "XENON", category: "Science", difficulty: "hard", hints: { easy: ["A chemical element.", "A type of gas.", "Used in lights."] }, meaning: "A chemical element used in lighting and anesthesia.", example: "Xenon is used in high-intensity lamps." }
];

// ===========================
// Game State
// ===========================
let gameState = {
    currentWord: null,
    currentDifficulty: "easy",
    guessedLetters: new Set(),
    correctLetters: new Set(),
    mistakeCount: 0,
    score: 0,
    hintIndex: 0,
    extraHintsUsed: 0,
    gameActive: false
};

const MAX_MISTAKES = 6;

// ===========================
// Initialization
// ===========================
document.addEventListener("DOMContentLoaded", () => {
    createLetterGrid();
    startNewGame();
    setupKeyboardInput();
});

// ===========================
// Letter Grid Creation
// ===========================
function createLetterGrid() {
    const grid = document.getElementById("letterGrid");
    grid.innerHTML = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        const tile = document.createElement("div");
        tile.className = `letter-tile ${i % 2 === 0 ? "blue" : "red"}`;
        tile.textContent = letter;
        tile.dataset.letter = letter;
        tile.addEventListener("click", () => handleGuess(letter, tile));
        grid.appendChild(tile);
    }
}

// ===========================
// New Game
// ===========================
function startNewGame() {
    // Hide overlay
    document.getElementById("overlay").classList.remove("active");

    // Reset state
    gameState.guessedLetters = new Set();
    gameState.correctLetters = new Set();
    gameState.mistakeCount = 0;
    gameState.hintIndex = 0;
    gameState.extraHintsUsed = 0;
    gameState.gameActive = true;

    // Pick random word
    const filteredWords = WORD_LIBRARY.filter(w => w.difficulty === gameState.currentDifficulty);
    gameState.currentWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];

    // Reset UI
    updateScore();
    updateMistakes();
    updateDifficultyDisplay();
    resetWordSlots();
    resetLetterTiles();
    resetCharacterBoard();
    updateHint();
    setMessage("Tap a letter to start guessing!");
}

// ===========================
// Difficulty
// ===========================
function cycleDifficulty() {
    const difficulties = ["easy", "medium", "hard"];
    const currentIdx = difficulties.indexOf(gameState.currentDifficulty);
    gameState.currentDifficulty = difficulties[(currentIdx + 1) % 3];
    startNewGame();
}

// ===========================
// Guessing
// ===========================
function handleGuess(letter, tileElement) {
    if (!gameState.gameActive || gameState.guessedLetters.has(letter)) return;

    gameState.guessedLetters.add(letter);
    const word = gameState.currentWord.word;

    if (word.includes(letter)) {
        // Correct guess
        gameState.correctLetters.add(letter);
        tileElement.classList.add("correct", "used");
        revealLetters(letter);
        updateHint();
        setMessage(`Great! "${letter}" is correct!`);

        // Check win
        if (checkWin()) {
            handleWin();
        }
    } else {
        // Wrong guess
        tileElement.classList.add("wrong", "used");
        tileElement.classList.add("shake");
        setTimeout(() => tileElement.classList.remove("shake"), 400);

        gameState.mistakeCount++;
        updateMistakes();
        revealBodyPart();
        updateHint();
        setMessage(`Oops! "${letter}" is not in the word.`);

        // Check lose
        if (gameState.mistakeCount >= MAX_MISTAKES) {
            handleLose();
        }
    }
}

// ===========================
// Reveal Letters
// ===========================
function revealLetters(letter) {
    const word = gameState.currentWord.word;
    const slots = document.querySelectorAll(".slot");

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            slots[i].textContent = letter;
            slots[i].classList.add("revealed");
        }
    }
}

// ===========================
// Body Part Reveal
// ===========================
function revealBodyPart() {
    const svgParts = ["svgHead", "svgBody", "svgLeftArm", "svgRightArm", "svgLeftLeg", "svgRightLeg"];
    const partId = svgParts[gameState.mistakeCount - 1];
    if (partId) {
        const part = document.getElementById(partId);
        part.classList.add("visible");
    }
    // Update mistakes counter
    document.getElementById("mistakesCounter").textContent = `MISTAKES: ${gameState.mistakeCount} / ${MAX_MISTAKES}`;
}

// ===========================
// Check Win/Lose
// ===========================
function checkWin() {
    const word = gameState.currentWord.word;
    for (let i = 0; i < word.length; i++) {
        if (!gameState.correctLetters.has(word[i])) return false;
    }
    return true;
}

function handleWin() {
    gameState.gameActive = false;

    // Calculate score
    const remainingLives = MAX_MISTAKES - gameState.mistakeCount;
    let points = 100 + (remainingLives * 20);
    points -= (gameState.extraHintsUsed * 10);
    if (gameState.currentDifficulty === "hard") points += 50;
    gameState.score += points;

    updateScore();

    // Show overlay
    setTimeout(() => {
        const overlay = document.getElementById("overlay");
        const title = document.getElementById("overlayTitle");
        title.textContent = "YOU WIN!";
        title.className = "overlay-title win";
        document.getElementById("overlayWord").textContent = gameState.currentWord.word;
        document.getElementById("overlayMeaning").textContent = gameState.currentWord.meaning;
        document.getElementById("overlayExample").textContent = `"${gameState.currentWord.example}"`;
        document.getElementById("overlayScore").textContent = gameState.score;
        overlay.classList.add("active");

        // Celebrate animation
        document.querySelector(".game-container").classList.add("celebrate");
        setTimeout(() => {
            document.querySelector(".game-container").classList.remove("celebrate");
        }, 2000);
    }, 600);
}

function handleLose() {
    gameState.gameActive = false;

    // Reveal the word
    const word = gameState.currentWord.word;
    const slots = document.querySelectorAll(".slot");
    for (let i = 0; i < word.length; i++) {
        slots[i].textContent = word[i];
        slots[i].classList.add("revealed");
        slots[i].style.background = "var(--tile-red)";
    }

    // Show overlay
    setTimeout(() => {
        const overlay = document.getElementById("overlay");
        const title = document.getElementById("overlayTitle");
        title.textContent = "GAME OVER";
        title.className = "overlay-title lose";
        document.getElementById("overlayWord").textContent = word;
        document.getElementById("overlayMeaning").textContent = gameState.currentWord.meaning;
        document.getElementById("overlayExample").textContent = `"${gameState.currentWord.example}"`;
        document.getElementById("overlayScore").textContent = gameState.score;
        overlay.classList.add("active");
    }, 800);
}

// ===========================
// Hints
// ===========================
function updateHint() {
    const hints = gameState.currentWord.hints[gameState.currentDifficulty];
    const hintContent = document.getElementById("hintContent");

    if (gameState.hintIndex < hints.length) {
        hintContent.textContent = hints[gameState.hintIndex];
    }
}

function showExtraHint() {
    if (!gameState.gameActive) return;

    const hints = gameState.currentWord.hints[gameState.currentDifficulty];
    gameState.extraHintsUsed++;

    if (gameState.hintIndex < hints.length - 1) {
        gameState.hintIndex++;
        updateHint();
        setMessage("Extra hint used! (-10 points)");
    } else {
        setMessage("No more hints available!");
    }
}

// ===========================
// UI Updates
// ===========================
function updateScore() {
    document.getElementById("score").textContent = gameState.score;
}

function updateMistakes() {
    document.getElementById("mistakes").textContent = `${gameState.mistakeCount} / ${MAX_MISTAKES}`;
}

function updateDifficultyDisplay() {
    document.getElementById("difficulty").textContent = gameState.currentDifficulty.toUpperCase();
}

function resetWordSlots() {
    const slots = document.querySelectorAll(".slot");
    slots.forEach(slot => {
        slot.textContent = "";
        slot.classList.remove("revealed");
        slot.style.background = "";
    });
}

function resetLetterTiles() {
    const tiles = document.querySelectorAll(".letter-tile");
    tiles.forEach((tile, i) => {
        tile.classList.remove("correct", "wrong", "used", "shake");
        tile.className = `letter-tile ${i % 2 === 0 ? "blue" : "red"}`;
    });
}

function resetCharacterBoard() {
    const parts = document.querySelectorAll(".hangman-part");
    parts.forEach(part => {
        part.classList.remove("visible");
    });
    document.getElementById("mistakesCounter").textContent = `MISTAKES: 0 / ${MAX_MISTAKES}`;
}

function setMessage(text) {
    document.getElementById("messageText").textContent = text;
}

// ===========================
// Keyboard Input
// ===========================
function setupKeyboardInput() {
    document.addEventListener("keydown", (e) => {
        const key = e.key.toUpperCase();
        if (/^[A-Z]$/.test(key)) {
            const tile = document.querySelector(`.letter-tile[data-letter="${key}"]`);
            if (tile && !tile.classList.contains("used")) {
                handleGuess(key, tile);
            }
        }
    });
}
