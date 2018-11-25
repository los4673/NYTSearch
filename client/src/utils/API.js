import axios from "axios";

const BaseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKey = "6c01868b354049a1a7dde3fbb55f0ff7";

export default {
  // Search Articles on NYT
  // Note: This search function does not work due to this error => Access to XMLHttpRequest 
  //at 'https://api.nytimes.com/svc/search/v2/articlesearch.json?[object%20Object]' from origin 
  //'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header
  // is present on the requested resource. Currently havent found fix to this bug.
  search: function(query) {
    query["api-key"] = APIKey;
    return axios.get(BaseURL + query);
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
