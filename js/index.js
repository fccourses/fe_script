'use strict';

const newsPaper = {
  title: 'FC daily',
  articles: ['Test1', 'Heading1', 'String1', 'Article1', 'INTERESTING'],

  showArticles() {
    this.articles.forEach(function logItem(currentArticle, index) {
      console.log(this)
      console.log(`${this.title} => ${index + 1}: ${currentArticle}`);
    });
  },
};

newsPaper.showArticles();
