module.exports = function (str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ /gm, ' ')
      .replace(/0/gm, '-----')
      .replace(/1/gm, '.----')
      .replace(/2/gm, '..---')
      .replace(/3/gm, '...--')
      .replace(/4/gm, '....-')
      .replace(/5/gm, '.....')
      .replace(/6/gm, '-....')
      .replace(/7/gm, '--...')
      .replace(/8/gm, '---..')
      .replace(/9/gm, '----.')
      .replace(/A/gm, '.-')
      .replace(/B/gm, '-...')
      .replace(/C/gm, '-.-.')
      .replace(/D/gm, '-..')
      .replace(/E/gm, '.')
      .replace(/F/gm, '..-.')
      .replace(/G/gm, '--.')
      .replace(/H/gm, '....')
      .replace(/I/gm, '..')
      .replace(/J/gm, '.---')
      .replace(/K/gm, '-.-')
      .replace(/L/gm, '.-..')
      .replace(/M/gm, '--')
      .replace(/N/gm, '-.')
      .replace(/O/gm, '---')
      .replace(/P/gm, '.--.')
      .replace(/Q/gm, '--.-')
      .replace(/R/gm, '.-.')
      .replace(/S/gm, '...')
      .replace(/T/gm, '-')
      .replace(/U/gm, '..-')
      .replace(/V/gm, '...-')
      .replace(/W/gm, '.--')
      .replace(/X/gm, '-..-')
      .replace(/Y/gm, '-.--')
      .replace(/Z/gm, '--..')
      .replace(/a/gm, '.-')
      .replace(/b/gm, '-...')
      .replace(/c/gm, '-.-.')
      .replace(/d/gm, '-..')
      .replace(/e/gm, '.')
      .replace(/f/gm, '..-.')
      .replace(/g/gm, '--.')
      .replace(/h/gm, '....')
      .replace(/i/gm, '..')
      .replace(/j/gm, '.---')
      .replace(/k/gm, '-.-')
      .replace(/l/gm, '.-..')
      .replace(/m/gm, '--')
      .replace(/n/gm, '-.')
      .replace(/o/gm, '---')
      .replace(/p/gm, '.--.')
      .replace(/q/gm, '--.-')
      .replace(/r/gm, '.-.')
      .replace(/s/gm, '...')
      .replace(/t/gm, '-')
      .replace(/u/gm, '..-')
      .replace(/v/gm, '...-')
      .replace(/w/gm, '.--')
      .replace(/x/gm, '-..-')
      .replace(/y/gm, '-.--')
      .replace(/z/gm, '--..')
      .replace(/.-/gm, 'a')
      .replace(/-.../gm, 'b')
      .replace(/-.-./gm, 'c')
      .replace(/-../gm, 'd')
      .replace(/./gm, 'e')
      .replace(/..-./gm, 'f')
      .replace(/--./gm, 'g')
      .replace(/..../gm, 'h')
      .replace(/../gm, 'i')
      .replace(/.---/gm, 'j')
      .replace(/-.-/gm, 'k')
      .replace(/.-../gm, 'l')
      .replace(/--/gm, 'm')
      .replace(/-./gm, 'n')
      .replace(/---/gm, 'o')
      .replace(/.--./gm, 'p')
      .replace(/--.-/gm, 'q')
      .replace(/.-./gm, 'r')
      .replace(/.../gm, 's')
      .replace(/-/gm, 't')
      .replace(/..-/gm, 'u')
      .replace(/...-/gm, 'v')
      .replace(/.--/gm, 'w')
      .replace(/-..-/gm, 'x')
      .replace(/-.--/gm, 'y')
      .replace(/--../gm, 'z')
  }
