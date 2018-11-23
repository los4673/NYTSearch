const mongoose = require("mongoose");
const db = require("../models");

// This file will seed my db for testing purposes
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const articlesSeed = [
  {
    title: 'Ali Sells Jersey House And Moves to Chicago',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago2',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago3',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago4',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago5',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago6',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago7',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago8',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago9',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Ali Sells Jersey House And Moves to Chicago10',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articlesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
