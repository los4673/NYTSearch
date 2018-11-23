import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    searchResults: [],
    savedArticles: [],
    searchTerm: "",
    numRecords: 5,
    startYear: 2018,
    endYear: 2017
  };

  componentDidMount() {
    this.loadArticles();
    this.loadSearch();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ savedArticles: res.data }))
      .catch(err => console.log(err));
  };

  loadSearch = () => {
    this.setState({
      searchResults: [
        {
          title: "Search Result Article",
          date: "2018",
          url: "amazom.com"
        },
        {
          title: "Search Result Article 2",
          date: "2017",
          url: "facebook.com"
        }
      ]
    });
  };

  //Save Article function
  saveArticle = (event, title, date, url) => {
    event.preventDefault();
    const article = {
      "title": title,
      "date": date,
      "url": url
    }
    console.log("Save Article button clicked and function called");
    console.log("Saved Article title" + title);
    console.log("Saved Article date" + date);
    console.log("Saved Article url" + url);
    if(title) {
      API.saveArticle(article)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
    }

  }

  // Update State
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    const startYear = this.state.startYear;
    const endYear = this.state.endYear;
    const query = {
      q: searchTerm
    };
    console.log("Submit Button Clicked");
    console.log("Search Term " + this.state.searchTerm);
    console.log("Number of Records" + this.state.numRecords);
    console.log("Start Year " + this.state.startYear);
    console.log("End Year " + this.state.endYear);
    API.search(query)
      .then(res => this.setState({ searchResults: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-8">
            <Jumbotron>
              <h1> New York Times Search</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <h3>Search Form</h3>
            <form>
              <label>Search Term: </label>
              <Input
                name="searchTerm"
                placeholder="Search Term"
                onChange={this.handleInputChange}
              />
              <label>Number of Records to Retrieve: </label>
              <select name="numRecords" onChange={this.handleInputChange}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <br />
              <label>Start Year (Optional): </label>
              <Input
                name="startYear"
                placeholder="Start Year(Optional)"
                onChange={this.handleInputChange}
              />

              <label>End Year (Optional): </label>
              <Input
                name="endYear"
                placeholder="Start Year(Optional)"
                onChange={this.handleInputChange}
              />
            </form>
            <FormBtn onClick={this.handleFormSubmit}> Search</FormBtn>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <h1>Results</h1>
            {this.state.searchResults.length ? (
              <List>
                {this.state.searchResults.map(article => (
                  <ListItem>
                    <p> Articles title : {article.title}</p>
                    <FormBtn onClick={(event) => {
                      this.saveArticle(event, article.title, article.date, article.url)
                    }}> Save</FormBtn>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <h1>Saved Articles</h1>
            {this.state.savedArticles.length ? (
              <List>
                {this.state.savedArticles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={article.url}>
                      <strong>
                        {article.title} Date: {article.date}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
