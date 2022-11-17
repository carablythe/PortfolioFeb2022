const username = prompt("Let's play SEI Mad Libs! What is your name?")
alert(`Hi, ${username}!`);
const pause = () => {prompt(``)}

//Make an array with different prompt options
const mad = [
  prompt(`Provide a verb.`),
  prompt(`Provide another verb.`),
  prompt(`Provide a noun.`),
  prompt(`Provide a plural noun.`),
  prompt(`Provide an adjective.`),
  prompt(`Provide another adjective.`),
  prompt(`Provide an adverb.`),
  prompt(`Provide another adverb.`),
  prompt(`Give me a silly name.`),
  prompt(`What is your favorite animal?`),
  prompt(`What was the last fruit you ate?`),
  prompt(`What is the name of your favorite anime character?`),
  prompt(`Provide a final adjective.`),
  ]

//Console log the mad lib, line by line, including the input from the player.

alert(`It was a(n) ${mad[4]} morning.`)
alert(`I had only awoken minutes before because my ${mad[2]} did not go off. `)
alert(`Typical.`)
alert(`The Zoom room was filled with other ${mad[12]} faces,`)
alert(`mostly because we had stayed up all night doing our assigned task to ${mad[0]} a(n) ${mad[10]}. `)
alert(`We were greeted with the ${mad[5]} voice of our IA, ${mad[8]}, who assured us that even if we didn't ${mad[1]} this assignment, `)
alert(`we would ${mad[6]} make it through the program if we continued to try our best.`)
alert(`After reviewing the ${mad[10]}, the IL, ${mad[11]},`)
alert(`turned on their webcam and started lecturing on the topic of ${mad[3]}.`)
alert(`All of a sudden, a(n) ${mad[9]} entered the call and growled ${mad[7]}, 'GGRRRRRRRRR'!`)
alert(`Thanks for playing SEI Mad Libs!`)
