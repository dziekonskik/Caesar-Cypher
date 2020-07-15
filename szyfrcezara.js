export function caesar13(sentence) {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const rot = 13;
    if (typeof sentence !== 'string' || sentence === '') {
        throw new Error('please provide a string of characters')
    }
    const encrypted = [...sentence].map(char=> {
        if (alphabet.includes(char)) {
            char = alphabet[((alphabet.indexOf(char))+rot)%alphabet.length]
        } else if (alphabet.includes(char.toUpperCase())) {
            char = alphabet[((alphabet.indexOf(char.toUpperCase()))+rot)%alphabet.length].toLowerCase()
        }
        return char
    });
    return encrypted.join('')
}

