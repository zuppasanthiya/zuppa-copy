import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
    return (
        <>
        <Header/>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Home;