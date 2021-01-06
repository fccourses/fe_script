'use strict';
function logItem(currentArticle, index) {
  console.log(`${this.title} => ${index + 1}: ${currentArticle}`);
}

const newsPaper = {
  title: 'FC daily',
  articles: ['Test1', 'Heading1', 'String1', 'Article1', 'INTERESTING'],

  showArticles() {
    this.articles.forEach(logItem.bind(this));//v 2
  },
};

newsPaper.showArticles();
