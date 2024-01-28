// https?: start with https or not start with it
// https?: : then followed by :
// \/\/: means followed by // but they are special chars so we add \
// (?:): means not include this group any word match this pattern will not printed
// (?:[-\w]+)?: not match any word or hyphen one or more times and followed by . if this group found onlly one time or not found at all
// ([-\w]+): math any word or hyphen
// \.: followed by .
// \w+: followed by word
// (?:\.\w+)?\/?.*: not match any group have .word found one time or not found then followed by / if it found one time or not found then followed by *. if it found or found only one time
// i: in case insensitive

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
