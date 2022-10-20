import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Privatrout from '../../../Routes/Privatrout';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { title, details, image_url, category_id } = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
               <Privatrout>
               <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this category</Button>
                </Link>
               </Privatrout>
            </Card.Body>
        </Card>
    );
};

export default News;