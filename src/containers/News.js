import { Flex, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { fetchNews } from '../actions/index';
import Loader from '../components/Loader';

function News () {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

  useEffect(
    () => {
      dispatch(fetchNews());
    },
    [dispatch]
  );

  const renderNews = () => {
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
      <Card
        className="bg-dark text-white mt-3"
        key={nws.symbol}
        style={{ width: '50rem' }}
      >
        <Card.Body>
          <Card.Title className="symbol">
            <h2>
              {nws.symbol}
            </h2>
          </Card.Title>
          <Card.Subtitle>
            <h3>
              {nws.title}
            </h3>
          </Card.Subtitle>
          <Card.Img>
            {nws.image}
          </Card.Img>
          <Card.Text>
            <h5>
            {nws.text}
            </h5>
            
            <h6>
              Site: 
              {nws.site}
              <br />
              <a
              className="website"
              href={nws.url}
              rel="noopener"
              target="__blank"
            >
              {' '}
              Visit Website
            </a>
            </h6>
            <h6>
              date:
              {nws.publishedDate}
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <Flex
      display="flex"
      w="100%"
      wrap="wrap"
    >
      {renderNews()}
    </Flex>
  );
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