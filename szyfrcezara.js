export function caesar13(sentence) {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    if (typeof sentence !== 'string' || sentence === '') {
        throw new Error('please provide a string of characters')
    }
    const encrypted = [...sentence].map(char=> {
        if (alphabet.includes(char)) {
            char = alphabet[((alphabet.indexOf(char))+13)%alphabet.length]
        } else if (alphabet.includes(char.toUpperCase())) {
            char = alphabet[((alphabet.indexOf(char.toUpperCase()))+13)%alphabet.length].toLowerCase()
        }
        return char
    });
    return encrypted.join('')
}

