const alphabet = readline(); // Read the scrambled alphabet
const n = parseInt(readline()); // Read the number of words

const words = [];
for (let i = 0; i < n; i++) {
    const w = readline(); // Read each word
    words.push(w); // Store the words in an array
}

// Define a custom sorting function based on the position of characters in the alphabet
function customSort(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        const indexA = alphabet.indexOf(a[i]);
        const indexB = alphabet.indexOf(b[i]);
        if (indexA !== indexB) {
            return indexA - indexB;
        }
    }
    return a.length - b.length; // If all characters are the same, sort by word length
}

// Sort the words using the custom sorting function
words.sort(customSort);

// Output the sorted words
for (let i = 0; i < n; i++) {
    console.log(words[i]);
}
