// ////////////////////////
//        Arrays
// ///////////////////////

// Van Damme quotes
const vandam = [
  [
    'You see,',
    "Si je t'emmerde, tu me le dis,",
    'Je me souviens en fait,',
    'Quand tu fais le calcul,',
    'Tu vois, premièrement, ',
    'Ça sounds good,',
  ],
  [
    "j'ai vraiment une grande mission car c'est juste une question d'awareness parce que spirituellement,",
    'si vraiment tu veux te rappeler des souvenirs de ton perroquet,',
    "j'ai vraiment une grande mission car entre penser et dire",
    "on vit dans une réalité qu'on a créée et que j'appelle illusion et ça,",
    'entre penser et dire, il y a un monde de différence',
    "tu vois au passage qu'il n'y a rien de concret,",
  ],
  [
    'on est tous ensemble, ok?',
    "c'est très dur, et, et, et... c'est très facile en même temps.",
    'il y a un monde de différence et cela même si les gens ne le savent pas!',
    'ça respire le meuble de Provence, hein?',
    'et finalement tout refaire depuis le début.',
    'car il faut toute la splendeur du aware!',
  ],
];

//  Random quotes
const alea = [
  [
    "Vu l'inertie induite,",
    "Quoi qu'on dise concernant cette inflexion de l'époque actuelle,",
    'Eu égard à la situation observée,',
    'Où que nous mène la morosité de ces derniers temps,',
    'Nonobstant la situation présente,',
    'Tant que durera la dégradation conjoncturelle,',
  ],
  [
    'il faut façonner la plus grande partie des améliorations pertinentes,',
    'il est nécessaire de prendre en compte chacune des améliorations imaginables,',
    "on ne peut se passer d'imaginer les principales voies réalisables,",
    'on se doit de prendre en considération la totalité des modalités envisageables,',
    'je recommande de fédérer la somme des hypothèses optimales,',
    "il serait bon d'inventorier toutes les voies que nous connaissons,",
  ],
  [
    "à l'avenir.",
    "parce qu'il est temps d'agir.",
    'avec beaucoup de recul.',
    "si l'on veut s'en sortir un jour.",
    'même si nous devons en tirer des conséquences.',
    "en prenant toutes les précautions qui s'imposent.",
  ],
];

// Author
const author = ['Moi', 'Toi', "La reine d'Angleterre", 'Personne', 'Superman', 'Le mec à coté'];

// ////////////////////////
//        VUE APP
// ///////////////////////

const app = new Vue({
  el: '#app',
  data: {
    color: '#07853d',
    showQuotes: false,
    quotesType: 'Van Damme',
    numQuotes: 1,
    quotes: [],
  },
  methods: {
    // select a random color
    pickColor() {
      const bgColor = Math.floor(Math.random() * 16777215).toString(16);
      this.color = '#' + ('000000' + bgColor).slice(-6);
    },
    // return a nmber between 0 and the array pass as argument
    randomPicker(quotArr) {
      return Math.floor(Math.random() * quotArr.length);
    },
    // return a random author
    pickAuthor() {
      return author[this.randomPicker(author)];
    },
    // return a quote composed of 3 parts
    pickQuote(type) {
      let quote = '';
      // loop trough the array 'type' to compose the quote
      type.forEach(part => {
        quote += part[this.randomPicker(part)] + ' ';
      });
      return quote;
    },
    // create the number of wanted quote of the wanted type
    createQuotes() {
      if (this.quotesType === 'Van Damme') {
        for (let i = 0; i < this.numQuotes; i++) {
          const quote = this.pickQuote(vandam);
          const author = 'Jean-Claude Van Damme';
          this.quotes.push({ quote: quote, author: author });
        }
      } else if (this.quotesType === 'Aléatoire') {
        for (let i = 0; i < this.numQuotes; i++) {
          const quote = this.pickQuote(alea);
          const author = this.pickAuthor();
          this.quotes.push({ quote: quote, author: author });
        }
      }
    },

    // BUTTON HANDLERS

    // generate quotes and show them
    generateQuotes() {
      this.pickColor();
      this.createQuotes();
      this.showQuotes = true;
    },
    // reset 'quotes' array and create the same number
    newQuote() {
      this.quotes = [];
      this.pickColor();
      this.createQuotes();
    },
    // reset all data to basis, except the type
    exit() {
      this.quotes = [];
      this.numQuotes = 1;
      this.pickColor();
      this.showQuotes = false;
    },
  },
  // follow the color change
  computed: {
    bgColor() {
      return {
        backgroundColor: this.color,
      };
    },
    textColor() {
      return {
        color: this.color,
      };
    },
  },
  // pick a random color when the app is launched
  created() {
    this.pickColor();
  },
});
