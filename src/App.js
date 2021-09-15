
import React from 'react';
import './App.css';
import { ItemList } from './components/ItemList';
import Ranker from './components/Ranker';

const items = [
  {
    name: "Item 1",
    rank: 0
  },
  {
    name: "Item 2",
    rank: 0
  },
  {
    name: "Item 3",
    rank: 0
  },
  {
    name: "Item 4",
    rank: 0
  },
  {
    name: "Item 5",
    rank: 0
  },
  {
    name: "Item 6",
    rank: 0
  },
  {
    name: "Item 7",
    rank: 0
  }
];

const contests = [];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);


// (n(n-1)) / 2
const totalGameCount = items.flatMap(
  (v, i) => items.slice(i+1).map( w => v + ' ' + w )
).length;



const hasContestBeenRun = (contestId) => {
  return contests.filter(c => c === contestId).length > 0;
}

Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

function App() {
  const [contestItems, setContestItems] = React.useState();
  const [isFinished, setIsFinished] = React.useState(false);
  const [contestCount, SetContestCount] = React.useState(0);

  const getNextContest = () => {
    if (isFinished) {
      return;
    }


    if (contestCount >= totalGameCount) {
      setIsFinished(true);
      return;
    }

    var sortedItems = items.sort((a, b) => a.rank - b.rank).reverse();

    var contestIndex = randomInteger(0, items.length - 1);
    var contestIndex2 = randomInteger(0, items.length - 1);

    if (contestIndex === contestIndex2) {
      return getNextContest();
    }


    let contestItem1 = sortedItems[contestIndex];
    let contestItem2 = sortedItems[contestIndex2];

    let contestId = [contestItem1, contestItem2].sortBy('name').map(c => c.name).join("-");

    console.log("Contest: ", contestId)

    const rankedPair = [contestItem1, contestItem2];

    if (hasContestBeenRun(contestId)) {
      console.log("Contest has already been run");
      return getNextContest();
    }

    contests.push(contestId);

    setContestItems(rankedPair);
    SetContestCount(contestCount + 1);




    // setContestIndex(thisContestIndex += 2);
  };

  const item1Win = () => {
    let thisItem = contestItems[0];
    thisItem.rank++;
    // items.filter(i => i.name != thisItem.name && i.rank > thisItem.rank).forEach((item => item.rank++));
    // items.filter(i => i.name != thisItem.name && i.rank < thisItem.rank).forEach((item => item.rank--));

    console.log(contestItems[0].name + " Won. Rank is now: " + contestItems[0].rank);

    getNextContest();

  };

  const item2Win = () => {
    let thisItem = contestItems[1];
    thisItem.rank++;
    // items.filter(i => i.name != thisItem.name && i.rank > thisItem.rank).forEach((item => item.rank++));
    // items.filter(i => i.name != thisItem.name && i.rank < thisItem.rank).forEach((item => item.rank--));

    console.log(contestItems[1].name + " Won Rank is now: " + contestItems[1].rank);

    getNextContest();
  }


  return (
    <div className="App" style={{
      width: '100%',
      margin: '0 auto'
    }}>

      <div>
        Game: {contestCount} / {totalGameCount}
      </div>
      {
        isFinished &&
        <div>Game complete!</div>
      }
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '500px',
        height: '300px',
        margin: '0 auto'
      }
      }>

        <ItemList items={items} title="The List" />
        {
          !isFinished &&
          <Ranker
            contestItems={contestItems}
            onStart={getNextContest}
            onItem1Click={item1Win}
            onItem2Click={item2Win}
          />
        }

        {/* <ItemList items={sortedItems} title="Ranked List" /> */}
      </section>
    </div>
  );
}

export default App;
