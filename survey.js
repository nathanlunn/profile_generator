const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
rl.question('What is your nickName? ', (nickName) => {
  rl.question('What is your favorite activity? ', (activity) => {
    rl.question('What do you listen to while you do that? ', (listenTo) => {
      rl.question('What is your favourite meal of the day? (breakfast, lunch, dinner) ', (meal) => {
        rl.question('What is your favourite food to eat during that meal? ', (food) => {
          rl.question('What is your favourite sport? ', (sport) => {
            rl.question('What is your superpower? (in a few words tell us what you\'re amazing at) ', (superpower) => {
              console.log();
              console.log(`${nickName} loves to listen to ${listenTo} while they are ${activity}. \nThey love to eat ${food} during their favourite meal of the day, ${meal}.\n${nickName}'s favourite sport of all time is ${sport}, and their super power is ${superpower}! \nWhat are you waiting for? Swipe right!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});