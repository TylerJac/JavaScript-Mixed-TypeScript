// Define a TypeScript type for VideoGame objects
type VideoGame = { 
    title: string; 
    developer: string; 
    releaseYear: number 
};

// Create an array of VideoGame objects
const videogames: VideoGame[] = [
    { title: 'The Legend of Zelda: Breath of the Wild', developer: 'Nintendo', releaseYear: 2017 },
    { title: 'Super Mario Odyssey', developer: 'Nintendo', releaseYear: 1990 },
    { title: 'Tetris', developer: 'Atari', releaseYear: 1984 },
    { title: 'Pac-Man', developer: 'Namco', releaseYear: 1980 },
    { title: 'Super Mario Bros.', developer: 'Nintendo', releaseYear: 1985 },
    { title: 'Contra', developer: 'Nintendo', releaseYear: 1987 },
    { title: 'Super Mario 64', developer: 'Nintendo', releaseYear: 1996 }
];

// Function to filter games by developer
function filterByDeveloper(games: VideoGame[], developer: string): VideoGame[] {
    return games.filter(game => game.developer === developer);
}

// Function to sort games in descending order by release year
function sortDescendingByReleaseYear(games: VideoGame[]): VideoGame[] {
    return games.sort((a: VideoGame, b: VideoGame) => b.releaseYear - a.releaseYear);
}

// Function to filter games by developer and then sort them in descending order by release year
function filterAndSort(games: VideoGame[], developer: string): VideoGame[] {
    let filteredGames = filterByDeveloper(games, developer); // Filter games by developer
    return sortDescendingByReleaseYear(filteredGames); // Sort filtered games by release year
}

// Get the filtered and sorted list of games developed by 'Nintendo'
let filteredAndSortedGames = filterAndSort(videogames, 'Nintendo');

// Log each game in the filtered and sorted list to the console
filteredAndSortedGames.forEach((game: VideoGame) => {
    console.log(`${game.title} - ${game.developer} (${game.releaseYear})`);
});
