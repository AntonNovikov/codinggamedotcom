Sort a list of words in lexicographic order based on the position of the characters in a scrambled alphabet.
Input
First line: scrambled alphabet
Second line: number of words n
Next n lines: a word w
Output
n lines: a word
Constraints
length of a scrambled alphabet = 26
w length ≤ 26
n ≤ 26
all letters are lowercase
Example
Input
ibcdefghajklmnopqrstuvwxyz
2
papa
papi
Output
papi
papa

```ts
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const alphabet: string = readline();
const n: number = parseInt(readline());
for (let i = 0; i < n; i++) {
    const w: string = readline();
}
for (let i = 0; i < n; i++) {

    // Write an answer using console.log()
    // To debug: console.error('Debug messages...');

    console.log('word');
}
```
