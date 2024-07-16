import { useState, useEffect } from "react";
import { GetHeadlines } from "../Service/NewsService.js";
import { Container, Row, Col, Alert, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Headline.css";
export default function Headline() {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    async function fetchHeadline() {
      const response = await GetHeadlines("technology");
      setArticles(response.data.articles);
    }
    fetchHeadline();
  });
  const HandleChange = (event) => {
    setTopic(event.target.value);
  };

  const HandleForm = async (event) => {
    event.preventDefault();
    const response = await GetHeadlines(topic);
    setArticles(response.data.articles);
    console.log(response.data.articles);
  };

  return (
    <>
      <Container>
        <Alert variant={"success"} className={"mt-4 text-center"}>
          <h4>Top Headlines</h4>
        </Alert>
        <form onSubmit={HandleForm}>
          <input
            type="text"
            className="search-input"
            placeholder="Search News"
            onChange={HandleChange}
          />
          <input
            type="submit"
            className="search-btn"
            value="Search"
            style={{
              backgroundColor: "blue",
              color: "white",
              borderColor: "blue",
            }}
          />
        </form>
      </Container>
      <Container className="mt-4">
        <Row className="row-gap">
          {articles.map((article, key) => {
            return (
              <Col className="col-gap" key={key} lg={4}>
                <Link
                  to={article.url}
                  style={{
                    textDecorationLine: "none",
                    color: "black",
                  }}
                >
                  <Card className="card-size">
                    <Card.Img src={article.urlToImage} />
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

// import { Component } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { GetHeadlines } from "../Service/NewsService.js";
// import "./AllNews.css";
// class Headline extends Component {
//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       topic: "",
//       error: null,
//     };
//   }

//   async componentDidMount() {
//     const response = await GetHeadlines("technology");
//     this.setState({
//       articles: response.data.articles,
//     });
//   }

//   HandleChange = (event) => {
//     this.setState({
//       topic: event.target.value,
//     });
//   };

//   HandleSubmit = async (event) => {
//     event.preventDefault();
//     const response = await GetHeadlines(this.state.topic);
//     this.setState({
//       articles: response.data.articles,
//     });
//   };

//   render() {
//     return (
//       <div className="allnews-main">
//         <div>
//           <div className="headline">View All News</div>
//         </div>
//         <Container className="mt-5">
//           <form className="allnews-ml-33" onSubmit={this.HandleSubmit}>
//             <input
//               type="text"
//               placeholder="Search News"
//               onChange={this.HandleChange}
//             />
//             <input
//               type="submit"
//               value="Search"
//               style={{
//                 backgroundColor: "blue",
//                 color: "white",
//                 borderColor: "blue",
//               }}
//             />
//           </form>
//         </Container>
//         <Container className="mt-3 ">
//           <Row className="row-gap">
//             {this.state.articles.map((article, headline) => {
//               return (
//                 <Col className="mt-5 row-gap" key={headline} lg={4}>
//                   <Card className="size">
//                     <Card.Img className="card-img" src={article.urlToImage} />

//                     {/* <Card.Title className="card-titl">{article.title}</Card.Title> */}
//                     <Card.Title className="card-ttl">
//                       {article.title.split(" ").slice(0, 23).join(" ")}
//                     </Card.Title>

//                     <Card.Text className="card-desc">
//                       {article.description.split(" ").slice(0, 22).join(" ")}
//                     </Card.Text>

//                     <a href={article.url} className={"btn btn-success"}>
//                       Read full article
//                     </a>
//                   </Card>
//                 </Col>
//               );
//             })}
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Headline;
