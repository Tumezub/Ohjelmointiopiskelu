window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
//Tällä koodilla haen tiedot muista tiedostoista

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;
//Tällä koodilla luon pelilaudalle, nykyiselle pelaajalle ja pelille muuttujat

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';
//Tällä koodilla kerron koneelle mahdolliset lopputulokset

    /*
        Ruudukko numeroina
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
//Tällä koodilla ilmoitan koneelle millä ehdoilla voi voittaa

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    }
//Tällä koodilla kone tarkistaa onko pelissä tullut voittajaa tai tasapeliä

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Pelaaja <span class="playerO">O</span> voitti';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Pelaaja <span class="playerX">X</span> voitti';
                break;
            case TIE:
                announcer.innerText = 'Tasapeli';
        }
        announcer.classList.remove('hide');
    };
//Tällä koodilla kerron koneelle miten ilmoittaa voittaja

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };
//Tällä koodilla varmistan, että pelaajat pelaavat tyhjiin ruutuihin

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }
//Tällä koodilla kerron koneelle miten pelilaudalle laitetaan pelaajan merkki

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }
//Tällä koodilla kerron koneelle milloin vaihtaa pelaajien vuoroa.

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
//Tällä koodilla kerron koneelle mitä tapahtuu aina kun pelaaja napsauttaa ruutua

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }
//Tällä koodilla kerron koneelle miten tyhjentää pelilauta ja aloittaa peli uudestaan.

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});
