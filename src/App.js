import GridContainer from "./components/GridContainer";
import GridItem from "./components/GridItem";

function App() {
  return (
    <div className="container">
      <GridContainer>
        <GridItem
          number="1"
          title="Join our community"
          heading="30-day, hassle-free money back guarantee"
          paragraph="Gain access to our full library of tutorials along with expert code reviews. 
  Perfect for any developers who are serious about honing their skills."
        />
        <GridItem
          number="2"
          heading="Monthly Subscription"
          price="$29"
          text="per month"
          paragraph="Full access for less than $1 a day"
        >
          <button>Sign Up</button>
        </GridItem>
        <GridItem
          number="3"
          heading="Why Us"
          paragraph="Tutorials by industry experts
  Peer &amp; expert code review
  Coding exercises
  Access to our GitHub repos
  Community forum
  Flashcard decks
  New videos every week"
        />
      </GridContainer>
    </div>
  );
}

export default App;
