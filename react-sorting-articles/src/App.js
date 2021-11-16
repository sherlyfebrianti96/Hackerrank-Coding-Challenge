import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

const sortingBy = {
  upvotes: 'Upvotes',
  recent: 'Recent'
};

function App({articles}) {
  const [sortMethod, setSortMethod] = useState(sortingBy.upvotes);

  const getArticles = () => {
    switch(sortMethod) {
      case sortingBy.upvotes:
        // Sort by Upvotes DESC
        return articles.sort((a, b) => Number(b.upvotes) - Number(a.upvotes));
      case sortingBy.recent:
        // Sort by Recent DESC
        return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
      default:
        return articles;
    }
  };

  const onClickUpvoted = () => {
    setSortMethod(sortingBy.upvotes);
  };

  const onClickRecent = () => {
    setSortMethod(sortingBy.recent);
  };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button
                  data-testid="most-upvoted-link"
                  className="small"
                  onClick={onClickUpvoted}
                >
                  Most Upvoted
                </button>
                <button
                  data-testid="most-recent-link"
                  className="small"
                  onClick={onClickRecent}
                >
                  Most Recent
                </button>
            </div>
            <Articles articles={getArticles()}/>
        </div>
    );

}

export default App;
