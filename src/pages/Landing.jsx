import React from 'react';
import './Landing.css'; // Import your CSS file
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='container-fluid'>
      {/* Landing Banner Section */}
      <div className='landing-container mb-5' style={{ height: '90vh', backgroundImage: 'url(https://img.freepik.com/premium-photo/book-with-picture-vegetables-book-titled-vegan_956920-229506.jpg?w=826)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='landing-overlay mb-3 d-flex justify-content-center align-items-center'>
          <Link to={'/your'} className='btn btn-dark landing-btn'>Explore Recipes</Link>
        </div>
      </div>

      {/* Featured Recipes Section */}
      <div className='container'>
        <h3 className='text-center mb-5 mt-5'>Our Special Recipes For You</h3>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card className="recipe-card">
              <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/07/93/55/68/1000_F_793556855_Bmyim6aDbpyHHRsHwE0JKCSKT6OK29Sn.jpg" />
              <Card.Body>
                <Card.Title>Mango Sticky Rice</Card.Title>
                <Card.Text>A popular Thai dessert featuring sweet sticky rice paired with fresh mango slices and drizzled with coconut milk. A delightful balance of flavors and textures.</Card.Text>
                <Card.Text>
                  <label>Ingredients:</label>
                  <ul>
                    <li>1 cup glutinous rice</li>
                    <li>1 ½ cups coconut milk</li>
                    <li>½ cup sugar</li>
                    <li>1 ripe mango, sliced</li>
                    <li>Pinch of salt</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card className="recipe-card">
              <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/04/27/37/60/1000_F_427376049_7cE6fpSnkWp3HJ1sqEcEgilOGCxhvRZs.jpg" />
              <Card.Body>
                <Card.Title>Spaghetti Carbonara</Card.Title>
                <Card.Text>A classic Italian dish made with spaghetti tossed in a creamy sauce of eggs, cheese, and crispy pancetta. Quick and satisfying!</Card.Text>
                <Card.Text>
                  <label>Ingredients:</label>
                  <ul>
                    <li>200g spaghetti</li>
                    <li>100g pancetta, diced</li>
                    <li>2 large eggs</li>
                    <li>50g Pecorino Romano cheese, grated</li>
                    <li>Black pepper, salt</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card className="recipe-card">
              <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/01/77/92/11/1000_F_177921152_mrsXGCPXz33uyNVtSy6vJ6jhxWWpyaMa.jpg" />
              <Card.Body>
                <Card.Title>Caprese Salad</Card.Title>
                <Card.Text>A refreshing Italian salad made with ripe tomatoes, creamy mozzarella, and fragrant basil. Drizzled with olive oil and balsamic vinegar.</Card.Text>
                <Card.Text>
                  <label>Ingredients:</label>
                  <ul>
                    <li>2 large tomatoes, sliced</li>
                    <li>200g fresh mozzarella, sliced</li>
                    <li>Fresh basil leaves</li>
                    <li>3 tbsp olive oil</li>
                    <li>Balsamic vinegar, salt, pepper</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Landing;
