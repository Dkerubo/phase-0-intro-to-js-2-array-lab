// Write your solution here!
// cats array is assigned an initial value of ["Milo", "Otis", "Garfield"]
let cats = ["Milo", "Otis", "Garfield"];

// Array functions

// Appends a cat to the end of the cats array (destructive)
function destructivelyAppendCat(name) {
    cats.push(name);
}
//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
// Appends a cat to the end of a new array (non-destructive)
function appendCat(name) {
    return [...cats, name];
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name,...cats];
}

// Removes the last cat from the cats array (destructive)
function destructivelyRemoveLastCat() {
    cats.pop();
}
//removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Removes the last cat from a new array (non-destructive)
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}         