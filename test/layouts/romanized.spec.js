import assert from 'assert';
import romanized from '../../src/layouts/romanized';
import { testKeys } from '../helper.js';

describe('romanized', () => {
  describe('formatKey()', () => {
    it('should return corresponding Nepali character.', () => {
      const expected = ["\u200C", "।", "्", "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "ङ", "\u200D",
        "॥", "?", "आ", "भ", "च", "ध", "ै", "ऊ", "घ", "अ", "ी", "झ", "ख", "ळ", "ं", "ण", "ओ", "फ", "ठ", "ृ",
        "श", "थ", "ू", "ँ", "औ", "ढ", "ञ", "ऋ", "इ", "ॐ", "ए", "^", " ", "ऽ", "ा", "ब", "छ", "द", "े", "उ",
        "ग", "ह", "ि", "ज", "क", "ल", "म", "न", "ो", "प", "ट", "र", "स", "त", "ु", "व", "ौ", "ड",
        "य", "ष", "ई", "ः", "ऐ", "़"];

      testKeys.every((element, index, array) => {
        assert.strictEqual(romanized.formatKey(element), expected[index]);
      });
    });

    it('should return undefined if it fails to map', () => {

      for (var i = 0; i < 127; i++) {
        let inputStr = String.fromCharCode(i);
        let found = testKeys.find(element => element == inputStr);

        if (!found) {
          assert.strictEqual(romanized.formatKey(inputStr), undefined);
        }
      }

    });
  });
});
