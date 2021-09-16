
import React from 'react';
import './App.css';
import { ItemList } from './components/ItemList';
import { NewItemPanel } from './components/NewItemPanel';
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

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
// const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);


// (n(n-1)) / 2
// const totalGameCount = items.flatMap(
//   (v, i) => items.slice(i + 1).map(w => v + ' ' + w)
// ).length;


const sortBy = function (arr, p) {
  return arr.slice(0).sort(function (a, b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

function App() {
  const [contestItems, setContestItems] = React.useState(null);
  const [isFinished, setIsFinished] = React.useState(false);
  const [allItems, setAllItems] = React.useState(items);
  const [contests, setContests] = React.useState([]);

  const getNextContest = () => {
    if (isFinished) {
      return;
    }


    if (contests.length >= totalGameCount()) {
      setIsFinished(true);
      return;
    }

    var sortedItems = allItems.sort((a, b) => a.rank - b.rank).reverse();

    var contestIndex = randomInteger(0, allItems.length - 1);
    var contestIndex2 = randomInteger(0, allItems.length - 1);

    if (contestIndex === contestIndex2) {
      return getNextContest();
    }


    let contestItem1 = sortedItems[contestIndex];
    let contestItem2 = sortedItems[contestIndex2];

    let contestId = sortBy([contestItem1, contestItem2], 'name').map(c => c.name).join("-");

    console.log("Contest: ", contestId)

    const rankedPair = [contestItem1, contestItem2];

    if (hasContestBeenRun(contestId)) {
      console.log("Contest has already been run");
      return getNextContest();
    }

    setContests([...contests, contestId]);

    setContestItems(rankedPair);
  };

  const item1Win = () => {
    let thisItem = contestItems[0];
    thisItem.rank++;

    getNextContest();

  };

  const item2Win = () => {
    let thisItem = contestItems[1];
    thisItem.rank++;

    getNextContest();
  };

  const newItemsSelected = (itemRows) => {
    const itemObjects = itemRows.map((label) => {
      return {
        name: label,
        rank: 0
      }
    });

    setAllItems(itemObjects);
    setContestItems(null);
    setContests([]);
    setIsFinished(false);
  };

  const totalGameCount = () =>{
    // (n(n-1)) / 2

    return ((allItems.length - 1) * allItems.length) / 2;
  };

  const hasContestBeenRun = (contestId) => {
    return contests.filter(c => c === contestId).length > 0;
  };

  return (
    <div className="App" style={{
      width: '100%',
      margin: '0 auto'
    }}>

      <div>
        Game: {contests.length} / {totalGameCount()}
      </div>
      <NewItemPanel
        itemsSelected={newItemsSelected}
      />
      {
        isFinished &&
        <div>Game complete!</div>
      }
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center ',
        // alignItems: 'center',
        width: '800px',
        height: '800px',
        margin: '0 auto',
        paddingTop: '20px'
      }
      }>
        
        {
          !isFinished &&
          <Ranker
            contestItems={contestItems}
            onStart={getNextContest}
            onItem1Click={item1Win}
            onItem2Click={item2Win}
          />
        }
        <ItemList
          items={allItems}
          title="The List"
          showItems={isFinished} />
      </section>
    </div>
  );
}

export default App;
