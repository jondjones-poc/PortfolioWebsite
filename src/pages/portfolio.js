import React from 'react'
import {Link} from 'react-router-dom';

const PortfolioPage = (props) => {
    console.log(props);
    return (
        <div>
            Portfolio Items
            <Link className="link" to='/portfolio/1'>
                Item One
            </Link>
            <Link className="link" to='/portfolio/2'>
                Item Two
            </Link>
        </div>
    )
};

export default PortfolioPage