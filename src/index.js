const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    var charArr = expr.match(/.{1,10}/g);
    var char = [];
    var msg = [];
    

    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] === '**********') {
            char.push(' ');
            msg.push(' ');
        } else {
            chars = charArr[i].match(/.{1,2}/g);
            let str = '';
            chars.forEach(item => {
                switch (item) {
                    case '10':
                        str += '.';
                        break;
                    case '11':
                        str += '-';
                        break;
                    default:
                        break;
                }
            });
            char.push(str);

            msg.push(MORSE_TABLE[char[i]]);
        }
    }

    return msg.join('');
}

module.exports = {
    decode
}