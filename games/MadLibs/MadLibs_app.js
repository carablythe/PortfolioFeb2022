const username = prompt("Let's play Mad Libs! What is your name?")
alert(`Hi, ${username}! Have you ever played Mad Libs before? It's a fun type of storytelling that gets you to practice English grammar and vocabulary! Of course, please ask your mom for help if there is anything you don't understand while playing the game.`)
alert(`Oh, and there's a surprise at the end! Shall we get started?`);
const pause = () => {prompt(``)}

//Make an array with different prompt options
const mad = [
  prompt(`Please provide a verb.`),
  prompt(`Next, provide another verb.`),
  prompt(`And now could you type in a noun?`),
  prompt(`How about a plural noun?`),
  prompt(`Please provide an adjective.`),
  prompt(`And another adjective.`),
  prompt(`How about an adverb?`),
  prompt(`And one more adverb, please.`),
  prompt(`Now type in the a silliest name you can think of.`),
  prompt(`What is your favorite animal?`),
  prompt(`And what was the last fruit you ate? (plural)`),
  prompt(`What is the name of your favorite anime or manga character?`),
  prompt(`Finally, give one last adjective.`),
  ]

//Console log the mad lib, line by line, including the input from the player.

alert(`Great! Now you can read my story!`)
alert(`It is a ${mad[4]} day, but no ordinary day. In fact, someone told me today is your birthday!`)
alert(`Happy birthday! I planned to get you a ${mad[2]} for your birthday gift, but the stores were all sold out. Just my luck...`)
alert(`But then I thought, "Actually, ${username} would much prefer a ${mad[9]} to a ${mad[2]}"! Am I right? Definitely a ${mad[12]} ${mad[9]} is the way to go...`)
alert(`Although, it would not be easy for your mom if you had a ${mad[9]} at home to take care of. So I decided to ${mad[0]} that idea and get you 100 ${mad[10]} instead. No doubt you would be pleased!`)
alert(`But could you eat that many ${mad[10]} before they turned ${mad[5]}? ...Gosh, I feel like a ${mad[8]} even considering it! How do I ${mad[1]} this problem? `)
alert(`Aha! I also know that you are ${mad[6]} good at ${mad[3]}! Something along those lines would be good, but truth be told I cannot even imagine what that would mean!`)
alert(`${mad[11]}, you say? Honestly, I did not know you even liked ${mad[11]}! If only you had a way of ${mad[7]} getting a gift you really liked like ${mad[11]}. Hmmm...Oh, I have an idea!`)

