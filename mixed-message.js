// require arrays
const {nouns} = require('./Lists');
const {pluralNouns} = require('./Lists');
const {adjectives} = require('./Lists');
const {verbs} = require('./Lists');
const {adverbs} = require('./Lists');
const {verbING} = require('./Lists');
const {properNouns} = require('./Lists');
const {ptVerbs} = require('./Lists');

// Randomizers
const nounsRandom = () => {
    let num1 = Math.floor(Math.random()*nouns.length);
    return nouns[num1];
}

const pluralNounsRandom = () => {
    let num2 = Math.floor(Math.random()*pluralNouns.length);
    return pluralNouns[num2];
}

const adjectivesRandom = () => {
    let num3 = Math.floor(Math.random()*adjectives.length);
    return adjectives[num3];
}

const verbsRandom = () => {
    let num4 = Math.floor(Math.random()*verbs.length);
    return verbs[num4];
}

const adverbsRandom = () => {
    let num5 = Math.floor(Math.random()*adverbs.length);
    return adverbs[num5];
}

const verbINGRandom = () => {
    let num6 = Math.floor(Math.random()*verbING.length);
    return verbING[num6];
}

const properNounsRandom = () => {
    let num7 = Math.floor(Math.random()*properNouns.length);
    return properNouns[num7];
}

const ptVerbsRandom = () => {
    let num8 = Math.floor(Math.random()*ptVerbs.length);
    return ptVerbs[num8]
}
//Nouns
let noun1 = nounsRandom();
let noun2 = nounsRandom();
let noun3 = nounsRandom();
let noun4 = nounsRandom();
// Plural Nouns
let pluralNoun1 = pluralNounsRandom();
let pluralNoun2 = pluralNounsRandom();
let pluralNoun3 = pluralNounsRandom();
let pluralNoun4 = pluralNounsRandom();
// Adjectives
let adjective1 = adjectivesRandom();
let adjective2 = adjectivesRandom();
let adjective3 = adjectivesRandom();
let adjective4 = adjectivesRandom();
let adjective5 = adjectivesRandom();
let adjective6 = adjectivesRandom();
let adjective7 = adjectivesRandom();
//Verbs
let verb1 = verbsRandom();
let verb2 = verbsRandom();
let verb3 = verbsRandom();
let verb4 = verbsRandom();
//Adverbs
let adverb1 = adverbsRandom();
let adverb2 = adverbsRandom();
//-ing Verbs
let verbING1 = verbINGRandom();
//properNouns
let properNoun1 = properNounsRandom();
let properNoun2 = properNounsRandom();
//ptVerbs
let ptVerb1 = ptVerbsRandom();
let ptVerb2 = ptVerbsRandom(); 

//Bodies
const body = [

    `A day at the zoo /n
    Today I went to the zoo. I saw a(n) ${adjective1} ${noun1} jumping up and down in its tree.
    He ${ptVerb1} ${adverb1} through the large tunnel that led to its ${adjective2} ${noun2}. 
    I got some peanuts and passed them through the cage to a gigantic gray ${noun3}
    towering above my head. Feeding that animal made
    me hungry. I went to get a ${adjective3} scoop
    of ice cream. It filled my stomach. Afterwards I had to
    ${verb1} ${adverb2} to catch our bus.
    When I got home I ${ptVerb2} my mom for a ${adjective4} day at the zoo.`,
    
    `In the jungle /n
    I walk through the color jungle. I take out my
    ${adjective1} canteen. There's a ${adjective2} parrot with a ${adjective3}
    ${noun1} in his mouth right there in front of me in the ${adjective4} trees! I gaze at his
    ${adjective5} ${noun2}. A sudden sound awakes me from my daydream! A panther’s
    ${verb1} in front of my head! I ${verb2} his ${adjective6} breath. 
    I remember I have a packet of ${noun3} that makes go into a deep slumber! I
    ${verb3} it away from me in front of the ${noun4}. Yes he's eating it! I
    ${verb4} away through the ${adjective7} jungle. I meet my parents at the
    tent. Phew! It’s been an exciting day in the jungle. `,
    
    `The fun park /n
    Today, my fabulous camp group went to a (an)
    ${adjective1} amusement park. It was a
    fun park with lots of cool ${pluralNoun1} 
    and enjoyable play structures. When we got there, my
    kind counselor shouted loudly, "Everybody off the
    ${noun1}." We all pushed out in a terrible
    hurry. My counselor handed out yellow tickets, and
    we scurried in. I was so excited! I couldn't figure out
    what exciting thing to do first. I saw a scary roller
    coaster I really liked so, I ${adverb1} ran
    over to get in the long line that had about
    ${Math.floor(Math.random()*50)} people in it. When I finally
    got on the roller coaster I was ${ptVerb1}. 
    In fact I was so nervous my two knees were knocking together. 
    This was the ${adjective3}est ride I had ever been on! In about two
    minutes I heard the crank and grinding of the gears.
    That’s when the ride began! When I got to the bottom,
    I was a little ${ptVerb2} (past tense verb) but I
    was proud of myself. The rest of the day went
    ${adverb2}. It was a(n) ${adjective2} day at the fun park. `,
    
    `Day at the arcade /n
    When I go to the arcade with my ${pluralNoun1} 
    there are lots of games to play. I spend
    lots of time there with my friends. In the game X-Men
    you can be different ${pluralNoun2}. The
    point of the game is to ${verb1} every robot. 
    You also need to save people. Then you can
    go to the next level.
     In the game Star Wars you are Luke Skywalker
    and you try to destroy every ${noun2}. In
    a car racing/motorcycle racing game you need to beat
    every computerized vehicle that you are
    ${verbING1} against.
    There are a whole lot of other cool games. When
    you play some games you win ${pluralNoun3} 
    for certain scores. Once you're done you can
    cash in your tickets to get a big ${noun3}. You
    can save your ${pluralNoun4} for 
    another time. When I went to this arcade I didn't
    believe how much fun it would be. So far I have had a
    lot of fun every time I've been to this great arcade! `,
    
    `First day at school /n
    One very nice morning near the end of summer,
    my mother woke me up at 4:00 A.M. and said, "Wake
    up and smell the grass, sleepy head! Today is your
    first day of school and you can't be late." I groaned in
    my bed for twenty seconds, but eventually I got
    dressed. I wore a blue and white striped, long sleeve
    ${noun1} with a collar on it, a red tie,
    dark gray pants, white socks, black shoes, and a(n)
    ${adjective1} hat. In ten minutes I made
    lunch and ate my breakfast. ${Math.floor(Math.random()*50)} 
    minutes later, the bus came. A few minutes later, I was at school.
    In school, I met two really
    ${adjective2} kids. All of us became friends very fast. 
    That day we had Science, and luckily my friends and I were at the same
    ${noun2}. My friends' names are ${properNoun1} and
    ${properNoun2}. In Math we weren't
    together, and that really bugged me. We learned what
    ${pluralNoun1} were, and when to use them. 
    At snack and recess, we played a game together. 
    It was extremely fun. At P. E., we were
    ${verbING1} off of the ropes onto ${pluralNoun2}.
     I thought it was a very ${adjective3} idea. In swimming class,
    we needed to swim extremely ${adverb1}, or else we would have to
    swim longer.
    Before I knew it, school was over. I grabbed all
    my belongings and put them into my backpack. In two
    minutes, the bus came. As I stepped into the bus I
    shouted, "Goodbye, adios amigos, and shalom," to
    my friends. Then I went into the bus. In a flash, I was
    back home. This day was an extremely exciting day! `
    
    
    ]


const mixedMessage = () =>{
    let random = Math.floor(Math.random()*body.length);
    console.log(body[random])
}

mixedMessage()