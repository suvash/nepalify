var assert = require('assert');
var layouts = require('../src/layouts').default;

const input = ["+", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<", "=", ">", "?", "A", "B", "C",
  "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
  "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"];

describe('layouts.romanized', () => {
  describe('formatKey()', () => {
    it('Should return corresponding Nepali character.', () => {
      const expected = ["\u200C", "।", "्", "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "ङ", "\u200D",
        "॥", "?", "आ", "भ", "च", "ध", "ै", "ऊ", "घ", "अ", "ी", "झ", "ख", "ळ", "ं", "ण", "ओ", "फ", "ठ", "ृ",
        "श", "थ", "ू", "ँ", "औ", "ढ", "ञ", "ऋ", "इ", "ॐ", "ए", "^", " ", "ऽ", "ा", "ब", "छ", "द", "े", "उ",
        "ग", "ह", "ि", "ज", "क", "ल", "म", "न", "ो", "प", "ट", "र", "स", "त", "ु", "व", "ौ", "ड",
        "य", "ष", "ई", "ः", "ऐ", "़"];

      input.every((element, index, array) => {
        assert.strictEqual(layouts.romanized.formatKey(element), expected[index]);
      });
    });

    it('Should return undefined if it fails to map', () => {

      for (var i = 0; i < 127; i++) {
        let inputStr = String.fromCharCode(i);
        found = input.find(element => element == inputStr);

        if (!found) {
          assert.strictEqual(layouts.romanized.formatKey(inputStr), undefined);
        }
      }

    });
  });
});
