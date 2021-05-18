import {Flex} from "@chakra-ui/react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import {filterStock} from "../actions/index";
import PropTypes from "prop-types";

const filters = [
    "actives",
    "gainers",
    "losers"
];

function Stock () {

    const dispatch = useDispatch(),
        {filter, loading, error} = useSelector((state) => state.filter),
        selectedstocks = filters.map((filter) => <option key={filter}
value={filter}>
{filter}
</option>),

        handleChange = (e) => {

            dispatch(filterStock(e.target.value));

        };

    useEffect(
        () => {

            dispatch(filterStock());

        },
        [dispatch]
    );

    if (loading) {

        return (<h1>
Loading data...
</h1>);

    }
    if (error) {

        return (<h1>
Error try again!
</h1>)

    }

    return (
        <Flex
            display="flex"
            w="100%"
            wrap="wrap"
        >
            <form
                className="form-flex"
                id="form"
            >
                <fieldset>
                    <legend>
                        Filter Stock
                    </legend>

                    <label className="form-label">
                        Select a category
                    </label>

                    <select
                        className="category-field"
                        id="category"
                        name="category"
                        onChange={handleChange}
                    >
                        {selectedstocks}
                    </select>
                </fieldset>
            </form>

            {
                filter.map((stock) => <Card
style={{width: "21rem" }}
                        className="bg-dark text-white mt-5"
                        key={stock.ticker}
                    >
                        <Card.Body>
                  <Card.Title className="ticker">
                                {stock.ticker}
                            </Card.Title>

                  <Card.Subtitle className="companyName">
                                {stock.companyName}
              </Card.Subtitle>

                  <Card.Text className="stockText">
                                <span className="profit">
                      Price:
{" "}
                  </span>

                  {stock.price}

                  {" "}
                  USD

                <br />

                  <span className="profit">
                    Profit:
{" "}
                </span>

                                {" "}

                                {stock.changesPercentage}
              </Card.Text>
              </Card.Body>

                        <a className='btn'
href={`\\stockDetail\\${stock.ticker}`}>
                Details
</a>
                    </Card>)
            }
        </Flex>
    );

}

Stock.propTypes = {
    "stock": PropTypes.shape({
        "ticker": PropTypes.string.isRequired,
        "companyName": PropTypes.string.isRequired,
        "price": PropTypes.string.isRequired,
        "currency": PropTypes.string,
        "changesPercentage": PropTypes.string.isRequired
    })
};

export default Stock;
