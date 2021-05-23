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
        <h1>
          Error try again!
        </h1>
      );
    }

    return news.map((nws) => (
      <Jumbotron key={nws.symbol}>
        <Container>
          <row>
          <Col md={4}>
              {' '}
              <img src={news.image} className="img-fluid img-thumbnail rounded" alt="" />
            </Col>
            <Col md={8}>
              <h1>{news.symbol}</h1>
              <h4>{news.title}</h4>
              <small className="text-muted">
                published:
                {news.publishedDate}
              </small>
              <hr />
              <p className="lead">
                {news.text}
                <br />
                <a href={news.url} className="text-light btn btn-success mt-2" target="__blank" rel="noopener"> Read more</a>
              </p>
            </Col>
          </row>
        </Container>
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