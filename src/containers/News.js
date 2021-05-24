import { GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNews } from '../actions/index';
import Loader from '../components/Loader';
import {
  Jumbotron, Container, Row, Col,
} from 'react-bootstrap';
import { useParams } from 'react-router';
import Error from '../components/Error';

function News () {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);
  const { symbol } = useParams();

  useEffect(
    () => {
      dispatch(fetchNews(symbol));
    },
    [dispatch]
  );

 
    if (loading) {
      return (
       <GridItem colSpan={4}>
         <Loader />
       </GridItem>
      );
    }
    if (error) {
      return (
        <GridItem colSpan="4">
          <Error />
        </GridItem>
      );
    }

    return news.map((nws) => (
      <Jumbotron key={nws.symbol} className="jumbotron">
        <Container>
          <Row className="content">
            <Col md={4} className="left">
              {' '}
              <img src={nws.image} className="img-fluid img-thumbnail rounded image" alt="Stock News" />
            </Col>
            <Col md={8} className="right">
              <h1 className="symbol">{nws.symbol}</h1>
              <h4 className="title">{nws.title}</h4>
              <small className="text-muted">
                published:
                {nws.publishedDate}
              </small>
              <hr />
              <p className="lead">
                {nws.text}
                <br />
                <a href={nws.url} className="text-light btn btn-success mt-2" target="__blank" rel="noopener"> Read more</a>
              </p>
            </Col>
          </Row>
        </Container>
        <hr />
      </Jumbotron>
    ))
};

News.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.string,
    symbol: PropTypes.string,
    title: PropTypes.string,
    publishedDate: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
  }),
};

News.defaultProps = {
  news: {},
};

export default News;