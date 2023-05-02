import React, { Children } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;