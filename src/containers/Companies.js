import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCompanies } from '../actions/index'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router'

const Companies = () => {
  const dispatch = useDispatch()
  const { companies, loading, error } = useSelector((state) => state.companies)
  const { ticker } = useParams()

  useEffect(() => {
    dispatch(fetchCompanies(ticker))
  }, [dispatch])

  const renderCompanies = () => {
    if (loading) return <h1>Loading data...</h1>
    if (error) return <h1>Error try again!</h1>

    return companies.map((company) => (
      <Card style={{ width: '21rem' }} className='bg-dark text-white mt-3' key={company.symbol}>
        <Card.Body className='border-bottom'>
          <Card.Title className='symbol'>{company.symbol}</Card.Title>
          <Card.Subtitle className='companyName'>{company.companyName}</Card.Subtitle>
          <Card.Text className='companyText'>
            <span className='profit'>Sector : </span>
            {company.sector}
            <br />
            <span className='info'>Industry : </span>
            {company.industry}
            <br />
            <span className='info'>Exchange : </span>
            {company.exchangeShortName}
            <br />
            <span className='info'>Country : </span>
            {company.country}
          </Card.Text>
        </Card.Body>
      </Card>
    ))
  }

  return (
    <Flex wrap='wrap' display='flex' w='100%'>
      {renderCompanies()};
    </Flex>
  )
}

export default Companies
