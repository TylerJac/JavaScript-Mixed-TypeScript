"use strict";
const videogames = [
    { title: 'The Legend of Zelda: Breath of the Wild', developer: 'Nintendo', releaseYear: 2017 },
    { title: 'Super Mario Odyssey', developer: 'Nintendo', releaseYear: 1990 },
    { title: 'Tetris', developer: 'Atari', releaseYear: 1984 },
    { title: 'Pac-Man', developer: 'Namco', releaseYear: 1980 },
    { title: 'Super Mario Bros.', developer: 'Nintendo', releaseYear: 1985 },
    { title: 'Contra', developer: 'Nintendo', releaseYear: 1987 },
    { title: 'Super Mario 64', developer: 'Nintendo', releaseYear: 1996 }
];
function filterByDeveloper(games, developer) {
    return games.filter(game => game.developer === developer);
}
function sortDescendingByReleaseYear(games) {
    return games.sort((a, b) => b.releaseYear - a.releaseYear);
}
function filterAndSort(games, developer) {
    let filteredGames = filterByDeveloper(games, developer);
    return sortDescendingByReleaseYear(filteredGames);
}
let filteredAndSortedGames = filterAndSort(videogames, 'Nintendo');
filteredAndSortedGames.forEach((game) => {
    console.log(`${game.title} - ${game.developer} (${game.releaseYear})`);
});
