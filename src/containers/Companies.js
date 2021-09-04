import { Flex, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { fetchCompanies } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Companies() {
  const dispatch = useDispatch();
  const { companies, loading, error } = useSelector((state) => state.companies);
  const { ticker } = useParams();

  useEffect(
    () => {
      dispatch(fetchCompanies(ticker));
    },
    [dispatch],
  );

  const renderCompanies = () => {
    if (loading) {
      return (
        <GridItem colSpan={4}>
          <Loader />
        </GridItem>
      );
    }
    if (error) {
      return (
        <GridItem colSpan={4}>
          <Error />
        </GridItem>
      );
    }

    return companies.map((company) => (
      <Card
        className="bg-dark text-white mt-3"
        key={company.symbol}
        style={{ width: '21rem' }}
      >
        <Card.Body className="border-bottom">
          <Card.Title className="symbol">
            {company.symbol}
          </Card.Title>

          <Card.Subtitle className="companyName">
            {company.companyName}
          </Card.Subtitle>

          <Card.Text className="companyText">
            <span className="profit">
              Sector :
              {' '}
            </span>

            {company.sector}

            <br />

            <span className="info">
              Industry :
              {' '}
            </span>

            {company.industry}

            <br />

            <span className="info">
              Exchange :
              {' '}
            </span>

            {company.exchangeShortName}

            <br />

            <span className="info">
              Country :
              {' '}
            </span>

            {company.country}
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
      {renderCompanies()}
      ;
    </Flex>
  );
}

export default Companies;
