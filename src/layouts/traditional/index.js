// prettier-ignore
const keyToNep = {
  //
  "a":  "\u092C", // ब
  "b": "\u0926", // द
  "c": "\u0905", // अ
  "d": "\u092E", // म
  "e": "\u092D", // भ
  "f": "\u093E", // ा
  "g": "\u0928", // न
  "h": "\u091C", // ज
  "i": "\u0937", // ष
  "j": "\u0935", // व
  "k": "\u092A", // प
  "l": "\u093F", // ि
  "m": "\u0903", // ः
  "n": "\u0932", // ल
  "o": "\u092F", // य
  "p": "\u0909", // उ
  "q": "\u0924\u094D\u0930", // त्र
  "r": "\u091A", // च
  "s": "\u0915", // क
  "t": "\u0924", // त
  "u": "\u0917", // ग
  "v": "\u0916", // ख
  "w": "\u0927", // ध
  "x": "\u0939", // ह
  "y": "\u0925", // थ
  "z": "\u0936", // श
  //
  "A": "\u0906", // आ
  "B": "\u094C", // ौ
  "C": "\u090B", // ऋ
  "D": "\u0919\u094D\u0917", // ङ्ग
  "E": "\u0910", // ऐ
  "F": "\u0901", // ँ
  "G": "\u0926\u094D\u0926", // द्द
  "H": "\u091D", // झ
  "I": "\u0915\u094D\u0937", // क्ष
  "J": "\u094B", // ो
  "K": "\u092B", // फ
  "L": "\u0940", // ी
  "M": "\u0921\u094D\u0921", // ड्ड
  "N": "\u0926\u094D\u092F", // द्य
  "O": "\u0907", // इ
  "P": "\u090F", // ए
  "Q": "\u0924\u094D\u0924", // त्त
  "R": "\u0926\u094D\u0935", // द्व
  "S": "\u0919\u094D\u0915", //  ङ्क
  "T": "\u091F\u094D\u091F", // ट्ट
  "U": "\u090A", // ऊ
  "V": "\u0950", // ॐ
  "W": "\u0921\u094D\u0922", // ड्ढ
  "X": "\u0939\u094D\u092F", // ह्य
  "Y": "\u0920\u094D\u0920", // ठ्ठ
  "Z": "\u0915\u094D\u0915", // क्क
  //
  "0": "\u0966", // ०
  "1": "\u0967", // १
  "2": "\u0968", // २
  "3": "\u0969", // ३
  "4": "\u096A", // ४
  "5": "\u096B", // ५
  "6": "\u096C", // ६
  "7": "\u096D", // ७
  "8": "\u096E", // ८
  "9": "\u096F", // ९
  //
  "!": "\u091C\u094D\u091E", // ज्ञ
  "@": "\u0908", // ई
  "#": "\u0918", // घ
  "$": "\u0926\u094D\u0927", // द्ध
  "%": "\u091B", // छ
  "^": "\u091F", // ट
  "&": "\u0920", // ठ
  "*": "\u0921", // ड
  "(": "\u0922", // ढ
  ")": "\u0923", // ण
  //
  "`": "\u091E", // ञ
  "~": "\u0965", // ॥
  //
  "-": "\u0914", // औ
  "_": "\u0913", // ओ
  //
  "+": "\u200C", // ZWNJ
  "=": "\u200D", // ZWJ
  //
  "[": "\u0930\u094D", // र्
  "{": "\u0943", // ृ
  //
  "]": "\u0947", // े
  "}": "\u0948", // ै
  //
  "\\": "\u094D", // ्
  "|":  "\u0902", // ं
  //
  ",":  "\u093D", // ऽ
  "<": "\u0919", // ङ
  //
  ".": "\u0964", // ।
  ">": "\u0936\u094D\u0930", // श्र
  //
  "/": "\u0930", // र
  "?": "\u0930\u0941", // रु
  //
  ";": "\u0938", // स
  ":": "\u091F\u094D\u0920", // ट्ठ
  //
  "'":  "\u0941", // ु
  "\"": "\u0942", // ू
};

function formatKey(key) {
  return keyToNep[key];
}

const layout = {
  name: "traditional",
  formatKey: formatKey,
};

export default layout;
