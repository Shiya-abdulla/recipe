import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
       <div className='p-5 bg-dark text-white'>
        <Row>
            <Col sm={12} md={4}>
            <h4>CookBook</h4>
            <p style={{textAlign:"justify"}}>CookBook is your ultimate recipe management tool, designed to simplify the process of organizing and cooking your favorite dishes. Effortlessly create, store, and manage recipes in one place, whether you're a seasoned chef or a home cook. Categorize by meal type or cuisine, and mark favorites for quick access. Say goodbye to scattered notes and enjoy a streamlined way to plan and prepare meals!</p>
            </Col>
            <Col sm={12} md={4}>
            <h4>Links</h4>
            <div className='d-flex flex-column '>
            <Link to={'/'} className='btn btn-light mb-4'>Home</Link>
            <Link to={'/your'} className='btn btn-light'>Add Your Recipes</Link>
            </div>
            </Col>
            <Col sm={12} md={4}>
            <h4>Feedbacks</h4>
            <textarea name="" id="" className='form-control'></textarea>
            <button className='btn btn-success mt-3'>Submit</button>
            </Col>
        </Row>
       </div>
        </>
    )
}

export default Footer