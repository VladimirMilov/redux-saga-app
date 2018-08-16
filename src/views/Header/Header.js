import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

const Home = () => {
    return (
        <div>
            <Link to={ROUTES.INITIAL}>Home</Link>
            <Link to={ROUTES.REQUESTS}>Async requests</Link>
            <Link to={ROUTES.ANIMATIONS}>Animations</Link>
            <Link to={ROUTES.CONTACTS}>Contacts</Link>
        </div>
    )
}

export default Home;
