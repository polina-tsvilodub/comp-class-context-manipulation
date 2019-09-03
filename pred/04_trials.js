// In this file you can specify the trial data for your experiment
const utt_prenominal_demonstr = {utterance1b: "That's a big ",  utterance1s: "That's a small ",  condition: "predicative_demonstrative"}
const utt_prenominal_pronoun = {utterance1b: "It's a big ", utterance1s: "It's a small ",  condition:"predicative_pronoun"}


const utterance = _.shuffle([utt_prenominal_demonstr,utt_prenominal_demonstr,utt_prenominal_demonstr,utt_prenominal_pronoun,utt_prenominal_pronoun,utt_prenominal_pronoun]);
const context = _.shuffle([0, 0, 0, 1, 1, 1]);
const items = {
  dogs1:     {referent: "doberman",
     utterance1: utterance[0].utterance1b,
     picture: ["images/dog-parade-basic.png", "images/dog-parade-doberman.png"],
     target: "warmup/doberman.png",
     adj: "big"
   },
  dogs2:   {referent: "great dane",
     utterance1: utterance[1].utterance1b,
     picture: ["images/dog-parade-basic2.png", "images/dog-parade-great-dane.png"],
     target: "warmup/great-dane.jpg",
     adj: "big"
   },

  birds:   {referent: "eagle",
     utterance1: utterance[2].utterance1b,
     picture: ["images/bird-parade-basic.png", "images/bird-parade-eagle.png"],
     target: "warmup/eagle.jpg",
     adj: "big"
   },
  fish:    {referent: "swordfish",
     utterance1: utterance[3].utterance1b,
     picture: ["images/fish-parade-basic.png", "images/fish-parade-swordfish.png"],
     target: "warmup/swordfish.jpg",
     adj: "big"
   },
  flowers:  {referent: "sunflower",
   utterance1: utterance[4].utterance1b,
   picture: ["images/flower-parade-basic.png", "images/flower-parade-sunflower.png"],
   target: "warmup/sunflower.png",
   adj: "big"
 },
  trees:    {referent: "redwood",
     utterance1: utterance[5].utterance1b,
     picture: ["images/tree-parade-basic.png","images/tree-parade-redwood.png"],
     target: "warmup/sequoia.jpg",
     adj: "big"
   }
}


// const utterance1 = utterance.question1
// const utterance2 = utterance.question2

const main_trials = {
    dogs1:   {
            context: "You and your friend see the following:",
            context_picture: items.dogs1.picture[context[0]],
            text: "<b>Both</b> of you see another member of the group." ,
            target: items.dogs1.target,
            question: "<b>You say to your friend: </b>",
            sentence_left: items.dogs1.utterance1,
            item: "dogs1",
            // if 0: big, if 1 small
            target_size: items.dogs1.adj,
            condition: utterance[0].condition,
            pic_spec: items.dogs1.referent,
            context_spec: context[0]


        },
    dogs2:    {
            context: "You and your friend see the following:",
            context_picture: items.dogs2.picture[context[1]],
            text:"<b>Both</b> of you see another member of the group." ,
            target: items.dogs2.target,
            question: "<b>You say to your friend: </b>",
            sentence_left: items.dogs2.utterance1,
            item: "dogs2",
            target_size: items.dogs2.adj,
            condition: utterance[1].condition,
            pic_spec: items.dogs2.referent,
            context_spec: context[1]

        },
    birds:    {
            context: "You and your friend see the following:",
            context_picture: items.birds.picture[context[2]],
            text: "<b>Both</b> of you see another member of the group." ,
            target: items.birds.target,
            question: "<b>You say to your friend: </b>",
            sentence_left: items.birds.utterance1,
            item: "birds",
            target_size: items.birds.adj,
            condition: utterance[2].condition,
            pic_spec: items.birds.referent,
            context_spec: context[2]

        },
  fish:      {
            context: "You and your friend see the following:",
            context_picture: items.fish.picture[context[3]],
            text: "<b>Both</b> of you see another member of the group." ,
            target: items.fish.target,
            question: "<b>You say to your friend: </b>",
            sentence_left: items.fish.utterance1,
            item: "fish",
            target_size: items.fish.adj,
            condition: utterance[3].condition,
            pic_spec: items.fish.referent,
            context_spec: context[3]

        },
  flowers:      {
            context: "You and your friend see the following:",
            context_picture: items.flowers.picture[context[4]],
            text: "<b>Both</b> of you see another member of the group." ,
            target: items.flowers.target,
            question:"<b>You say to your friend: </b>",
            sentence_left: items.flowers.utterance1,
            item: "flowers",
            target_size: items.flowers.adj,
            condition: utterance[4].condition,
            pic_spec: items.flowers.referent,
            context_spec: context[4]

        },
    trees:    {
            context: "You and your friend see the following:",
            context_picture: items.trees.picture[context[5]],
            text: "<b>Both</b> of you see another member of the group." ,
            target: items.trees.target,
            question: "<b>You say to your friend: </b>",
            sentence_left: items.trees.utterance1,
            item: "trees",
            target_size: items.trees.adj,
            condition: utterance[5].condition,
            pic_spec: items.trees.referent,
            context_spec: context[5]

        }
};


const warmup_trials = {dogs1: {
  item: "dogs",
  picture1: "warmup/chihuahua.jpg",
  picture2: "warmup/doberman.png",
  correct1: ["chihuahua"],
  correct2: ["doberman"],
  correct3: ["dogs"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"

},
dogs2: {
  item: "dogs",
  picture1: "warmup/pug.jpg",
  picture2: "warmup/great-dane.jpg",
  correct1: ["pug"],
  correct2: ["great dane"],
  correct3: ["dogs"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},
birds: {
  item: "birds",
  picture1: "warmup/colibri.jpg",
  picture2: "warmup/eagle.jpg",
  correct1: ["hummingbird"],
  correct2: ["eagle"],
  correct3: ["birds"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is an ",
  question2: "These are both"
},
flowers: {
  item: "flowers",
  picture1: "warmup/dandelion.jpg",
  picture2: "warmup/sunflower.png",
  correct1: ["dandelion"],
  correct2: ["sunflower"],
  correct3: ["flowers"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},
fish: {
  item: "fish",
  picture1: "warmup/swordfish.jpg",
  picture2: "warmup/goldfish.png",
  correct1: ["swordfish"],
  correct2: ["goldfish"],
  correct3: ["fish"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},

trees: {
  item: "trees",
  picture1: "warmup/sequoia.jpg",
  picture2: "warmup/bonsai.jpg",
  correct1: ["redwood", "sequoia"],
  correct2: ["bonsai"],
  correct3: ["trees"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
}
}

const trials = _.shuffle([ {x: warmup_trials.dogs1, y:main_trials.dogs1}, {x: warmup_trials.dogs2, y:main_trials.dogs2},
  {x:warmup_trials.birds, y:main_trials.birds},
  {x:warmup_trials.flowers, y:main_trials.flowers},
  {x:warmup_trials.fish, y:main_trials.fish},
  {x:warmup_trials.trees, y: main_trials.trees}])

  const trial_info = {

       text_insertion_main1: [

         trials[0].y,
         trials[1].y,
         trials[2].y

    ],
    text_insertion_main2 :[
      trials[3].y,
      trials[4].y,
      trials[5].y
    ],
     text_insertion_warmup1: [
       trials[0].x,
       trials[1].x,
       trials[2].x
    ],
    text_insertion_warmup2: [
      trials[3].x,
      trials[4].x,
      trials[5].x
    ]
  };
