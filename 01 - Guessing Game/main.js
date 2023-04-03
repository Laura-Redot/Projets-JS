function guessNumber() {
    let playerGuess;
    const numberToGuess = Math.ceil(Math.random() * 10);

    prompt('Deviner le nombre entre 1 et 10 inclus.');

    while(playerGuess != numberToGuess) {
        playerGuess = prompt('Echec! Essayez à nouveau de deviner le nombre (entre 1 et 10 inclus).');
    }

    alert(`Félicitation! Le nombre était ${numberToGuess}!`);
}

guessNumber();