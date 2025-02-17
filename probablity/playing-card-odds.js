/**
 * A standard 52-card deck consists of every combination of 13 ranks and 4 suits.
 * Ranks are 2 through 9, T (ten), J (jack), Q (queen), K (king), and A (ace). 
 * Suits are C (clubs), D (diamonds), H (hearts), and S (spades).
 * A descriptive classification means a combination of ranks, suits, or both, where 
 * any of the given ranks must match, and any of the given suits must match. For 
 * instance, 8TA consists of 12 cards in total, namely the eights, tens, and aces 
 * of any suit. H represents the 13 hearts. 45C specifies only two cards, the four 
 * and five of clubs. And 7CDHS would be equivalent to just 7.
 * 
 * Given R descriptive classifications of cards removed from a shuffled deck, and S 
 * descriptive classifications of cards sought, find the odds of picking such a card 
 * from those remaining, stated as a rounded percentage.
 * 
 * Examples
 * Consider a deck with 45C removed, leaving 50 cards. The odds of picking 7H are 1 
 * in 50 or 2% since there is a single card that matches, namely the seven of hearts.
 * On the other hand, when given as separate descriptive classifications, the chances 
 * for 7 or H are 16 in 50 or 32% to pick any of 4 sevens or 13 hearts. Note that 
 * this is not 17 in 50 since the seven of hearts, which matches both ways, only shows 
 * up once.
 */
const { readFileAsStream } = require("../file-manager.cjs");
const { spawn } = require("child_process");
const child = spawn('ls', ['./playing-card-odds-tests']);

child.stdout.on('data', (data) => {
    const testFiles = data.toString().trimEnd().split("\n")
    for (const testFile of testFiles) {
        
        readFileAsStream(`./playing-card-odds-tests/${testFile}`)
            .then(content => {console.log("Executing testcase:", testFile,"\n"); calculateProbability(content)})
            .catch(err => console.error('Error reading file:', err));
    }
});

function calculateProbability(input) {
    const data = input.split("\n")
    console.error(data)
    const [R, S] = data[0].split(" ").map(Number)

    const DECK_LENGTH = 52

    let removedCards = [], soughtCards = []
    for (let i = 1; i <= R; i++) {
        const removed = data[i]
        console.error("removed", removed)
        removedCards = [...getCardsByInstruction(removed, removedCards)]
    }

    const totalCardsRemaining = DECK_LENGTH - removedCards.length

    let soughProbablity = 0
    for (let i = R+1; i <= S+R; i++) {
        const sought = data[i];
        console.error("sought", sought)
        soughtCards = [...getCardsByInstruction(sought, soughtCards)]
    }
    for (const card of soughtCards) {
        if (!removedCards.includes(card))
            soughProbablity += 1 / totalCardsRemaining
    }
    console.log(`${Math.round((soughProbablity) * 100)}%`)

    function getCardsByInstruction(instruction, previouslySeparated) {
        const cards = [...previouslySeparated]
        if (instructionHasOnlySuits(instruction)) {
            for (const suit of instruction.split("")) {
                if (!cards.includes(`A${suit}`)) cards.push(`A${suit}`)
                if (!cards.includes(`2${suit}`)) cards.push(`2${suit}`)
                if (!cards.includes(`3${suit}`)) cards.push(`3${suit}`)
                if (!cards.includes(`4${suit}`)) cards.push(`4${suit}`)
                if (!cards.includes(`5${suit}`)) cards.push(`5${suit}`)
                if (!cards.includes(`6${suit}`)) cards.push(`6${suit}`)
                if (!cards.includes(`7${suit}`)) cards.push(`7${suit}`)
                if (!cards.includes(`8${suit}`)) cards.push(`8${suit}`)
                if (!cards.includes(`9${suit}`)) cards.push(`9${suit}`)
                if (!cards.includes(`T${suit}`)) cards.push(`T${suit}`)
                if (!cards.includes(`J${suit}`)) cards.push(`J${suit}`)
                if (!cards.includes(`Q${suit}`)) cards.push(`Q${suit}`)
                if (!cards.includes(`K${suit}`)) cards.push(`K${suit}`)
            }
        }

        else for (const card of instruction.split("")) {
            if (itsACard(card)) {
                if (!instructionHasSuit(instruction)) {
                    if (!cards.includes(`${card}C`)) cards.push(`${card}C`)
                    if (!cards.includes(`${card}D`)) cards.push(`${card}D`)
                    if (!cards.includes(`${card}H`)) cards.push(`${card}H`)
                    if (!cards.includes(`${card}S`)) cards.push(`${card}S`)
                }
                else {
                    if (instruction.includes("C") && !cards.includes(`${card}C`))
                        cards.push(`${card}C`)
                    if (instruction.includes("D") && !cards.includes(`${card}D`))
                        cards.push(`${card}D`)
                    if (instruction.includes("H") && !cards.includes(`${card}H`))
                        cards.push(`${card}H`)
                    if (instruction.includes("S") && !cards.includes(`${card}S`))
                        cards.push(`${card}S`)
                }
            }
        }
        return cards
    }

    function itsACard(card) {
        return instructionHasCards(card)
    }

    function instructionHasSuit(instruction) {
        return instruction.includes("C") || instruction.includes("D") || instruction.includes("H") || instruction.includes("S")
    }

    function instructionHasCards(instruction) {
        return instruction.includes("A") ||
            instruction.includes("T") ||
            instruction.includes("J") ||
            instruction.includes("K") ||
            instruction.includes("Q") ||
            instruction.includes("2") ||
            instruction.includes("3") ||
            instruction.includes("4") ||
            instruction.includes("5") ||
            instruction.includes("6") ||
            instruction.includes("7") ||
            instruction.includes("8") ||
            instruction.includes("9")
    }

    function instructionHasOnlySuits(instruction) {
        return instructionHasSuit(instruction) &&
            !instructionHasCards(instruction)
    }

}