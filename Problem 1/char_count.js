const str = 'Amolya Sharma';

const getCharCount = (str) => {
    let count = {};
    
    str.split('').map(char => {
        if(char !== ' ') {
            let charUpper = char.toUpperCase();
            count[charUpper] = count[charUpper] ? count[charUpper]+1 : 1;
        }
    })
    
    return count;
}

const count = getCharCount(str);

Object.keys(count).map(char => {
    console.log(`${char}-${count[char]}`);
});