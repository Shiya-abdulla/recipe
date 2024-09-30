import React from 'react';
import './Landing.css'; // Import your CSS file
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landing() {
  return (
  <div>
        
        <div className='landing-container mb-5'  style={{height:'90vh'}}>
          <div className='landing-overlay mb-3'>
           
            <Link to={'/your'} className='btn btn-dark'>Explore Recipes</Link>
          </div>
    
        
        </div>

        <div >
            <h3 className='text-center mb-3 mt-5'>Our Some Special Recipes For You</h3>


    <div  className='container-fluid my-5'>
        <Row className='d-flex justify-content-between p-3'>
            <Col sm={12} md={4}>
                <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/07/93/55/68/1000_F_793556855_Bmyim6aDbpyHHRsHwE0JKCSKT6OK29Sn.jpg" />
          <Card.Body>
            <Card.Title>Mango Sticky Rice</Card.Title>
            <Card.Text>
            A popular Thai dessert featuring sweet sticky rice paired with fresh mango slices and drizzled with coconut milk. It’s a delightful balance of flavors and textures.
            </Card.Text>
            <Card.Text>
                <label htmlFor="">Incredients :</label>
                1 cup glutinous rice ,
1 ½ cups coconut milk ,
½ cup sugar,
1 ripe mango, sliced,
Pinch of salt

            </Card.Text>
           
          </Card.Body>
        </Card>
        </Col>

<Col sm={12} md={4}>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/04/27/37/60/1000_F_427376049_7cE6fpSnkWp3HJ1sqEcEgilOGCxhvRZs.jpg" />
          <Card.Body>
            <Card.Title>Spaghetti Carbonara</Card.Title>
            <Card.Text>
            A classic Italian dish made with spaghetti tossed in a creamy sauce of eggs, cheese, and crispy pancetta. It's quick, satisfying, and bursting with flavor!
            </Card.Text>
            <Card.Text>
                <label htmlFor="">Incredients :</label>
                200g spaghetti
100g pancetta, diced
2 large eggs
50g Pecorino Romano cheese, grated
Black pepper
Salt

            </Card.Text>
            
          </Card.Body>
          
        </Card>
        </Col>

        <Col sm={12} md={4}>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/01/77/92/11/1000_F_177921152_mrsXGCPXz33uyNVtSy6vJ6jhxWWpyaMa.jpg" />
          <Card.Body>
            <Card.Title> Caprese Salad</Card.Title>
            <Card.Text>
            A refreshing Italian salad made with ripe tomatoes, creamy mozzarella, and fragrant basil, drizzled with olive oil and balsamic vinegar. Perfect as an appetizer or side dish.
            </Card.Text>
            <Card.Text>
                <label htmlFor="">Incredients :</label>
                2 large tomatoes, sliced
200g fresh mozzarella, sliced
Fresh basil leaves
3 tbsp olive oil
Balsamic vinegar
Salt and pepper


            </Card.Text>
           
          </Card.Body>
        </Card>
        </Col>
        </Row>
    </div>
        </div>
    
  </div>
  );
}

export default Landing;
