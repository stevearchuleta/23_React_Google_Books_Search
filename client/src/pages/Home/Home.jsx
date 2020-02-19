import React, { Component } from "react";
import Navigation from '../../components/Navigation/Navigation'
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Search from "../components/Search";
import Blank1 from '../components/LayoutBlanks/Blank-1';
import Blank2 from '../components/LayoutBlanks/Blank-2';
import Blank3 from '../components/LayoutBlanks/Blank-3';
import Blank4 from '../components/LayoutBlanks/Blank-4';

import API from "../utils/API";
import { Col, Row, Container } from "../components/Results";
import { List } from "../components/List";

import "./home.css"
import Aux from '../../hoc/Aux';

class Home extends Component {
   state = {
     books: [],
     q: "",
     message: "Search For A Book To Begin!"
   };


   render() {
     return(
      <Aux>
          <Navigation />
          <Blank1 />
          <Blank2 />
          <Blank3 />
          <Card />
          <Blank4 />
          <Search />
      </Aux>
      
     )
   }
  }

export default Home;

//    <title>Google Books Test Layout</title>
// </head>
// <body>
//    <main class="container">
//       <div class="item nav">Google Books

//       </div>
//       <div class="item blank-1">Blank-1</div>
//       <div class="item blank-2">Blank-2</div>
//       <div class="item blank-3">Blank-3</div>
//       <div class="item search">Book Search
//             <p>Book</p>
//             <form>
               
//             </form>
         
//       </div>
//       <div class="item blank-4">Blank-4</div>
//       <div class="item results">Results</div>
//    </main>
// </body>
// </html>