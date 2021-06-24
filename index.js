const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
  // return tutorials
// }

//too congested
// const titleCased = (some) => {
//   return tutorials.map(sentance => {
//     const word = sentance.split(" ");
//     return word.map(letter => letter[0].toUpperCase()+letter.slice(1)).join(" ");
//   })
// } 

const titleCased = (some) => {
  return tutorials.map(sentance => {
    const word = sentance.split(" ");
    const capIt = word.map(letter => letter[0].toUpperCase()+letter.slice(1));
    return capIt.join(" ");
  });
} 