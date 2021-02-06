import React from "react";
import Jumbo from "../components/Jumbotron";
import { Container, Table } from "react-bootstrap";

function Home() {
  return (
    <>
      <Jumbo />
      {/* <Container>
        <h2>Title</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
          </tbody>
        </Table>
      </Container> */}
    </>
  );
}

export default Home;
