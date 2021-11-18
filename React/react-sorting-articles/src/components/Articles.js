import React from 'react';

function Articles({articles}) {
  const articleList = articles.map((item, index) => (
    <tr data-testid="article" key={`article-${index}`}>
        <td data-testid="article-title">{item.title}</td>
        <td data-testid="article-upvotes">{item.upvotes}</td>
        <td data-testid="article-date">{item.date}</td>
    </tr>
  ))

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {articleList}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
