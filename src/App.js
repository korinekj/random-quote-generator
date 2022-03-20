import "./App.css";
import React from "react";

//logika aplikace
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: "",
      citat: "",
    };

    this.vygenerujNovyCitat = this.vygenerujNovyCitat.bind(this);
  }

  vygenerujNovyCitat() {
    //metoda na generování nového citatu z databaze citatu [{QUOTES}] po kliknuti na button
    const randomNumber = Math.floor(Math.random() * QUOTES.length);

    this.setState({
      autor: QUOTES[randomNumber].author,
      citat: QUOTES[randomNumber].quote,
    });
  }

  componentDidMount() {
    this.setState(() => {
      return this.vygenerujNovyCitat();
    });
  }

  render() {
    return (
      <QuoteBox
        citat={this.state.citat}
        autor={this.state.autor}
        novyCitat={this.vygenerujNovyCitat}
      />
    );
  }
}

//UI aplikace
class QuoteBox extends React.Component {
  render() {
    return (
      <>
        <div id="quote-box">
          <div id="text">
            <q>{this.props.citat}</q>
          </div>
          <div id="author">-{this.props.autor}</div>
          <div id="new-quote">
            <button onClick={this.props.novyCitat}>Generate New Quote</button>
          </div>
          <div>
            <a
              href="https://www.twitter.com/intent/tweet"
              id="tweet-quote"
              target="_blank"
            >
              Tweet Quote
            </a>
          </div>
        </div>
      </>
    );
  }
}

//citáty
const QUOTES = [
  { quote: "Do the work!", author: "Rich Cooper" },
  { quote: "She is not yours, it is just your turn!", author: "Rich Cooper" },
  {
    quote: "Is the woman who applies make up everyday being herself.",
    author: "Rollo Tomassi",
  },
  {
    quote: "Pojem bohatství záleží spíše v užívání než v pouhém vlastnictví.",
    author: "Aristoteles",
  },
  {
    quote: "Jedni mudrci vědí, že nevědí a druzí nevědí že nevědí.",
    author: "Sókratés",
  },
  { quote: "Orel neloví mouchy.", author: "Sókratés" },
  {
    quote: "Představte si to ticho, kdyby lidé říkali jen to, co vědí.",
    author: "Karel Čapek",
  },
  {
    quote:
      "Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít.",
    author: "Jan Werich",
  },
  {
    quote:
      "Žít, to je nejvzácnější věc na světě, neboť většina lidí jenom existuje.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Pouze dvě věci jsou nekonečné. Vesmír a lidská hloupost. U té první si tím však nejsem tak jist.",
    author: "Albert Einstein",
  },
  { quote: "Svět patří těm, co se neposerou.", author: "Charles Bukowski" },
  {
    quote: "Na světě nejsou nejkrásnější věci, ale okamžiky.",
    author: "Karel Čapek",
  },
  { quote: "Člověk je sám i mezi lidmi.", author: "Antoine de Saint-Exupéry" },
  {
    quote:
      "Čeština je krásná řeč. Ona má obrovskou plejádu slov pro obyčejný věci. Třeba kulaťoučké jablíčko. To neřeknete jinou řečí. Angličan musí říct “a litte round apple“, malé kulaté jablko…. Tomu přece chybí barva i vůně.",
    author: "Jan Werich",
  },
];

export default App;
