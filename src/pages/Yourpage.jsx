import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Card } from 'react-bootstrap';
import { addRecipe, deleteRecipe, updateRecipe } from '../redux/slice/recipeSlice';

function Yourpage() {
  const [show, setShow] = useState(false);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipeSlice.items);

  const handleClose = () => {
    setShow(false);
    clearForm();
  };

  const handleShow = () => setShow(true);

  // Handle adding or updating a recipe
  const handleAddRecipe = () => {
    const newRecipe = { recipeName, ingredients, instructions, image };

    if (editIndex === null) {
      dispatch(addRecipe(newRecipe));
    } else {
      dispatch(updateRecipe({ index: editIndex, updatedRecipe: newRecipe }));
    }
    handleClose();
  };

  // Handle deleting a recipe
  const handleDeleteRecipe = (index) => {
    dispatch(deleteRecipe(index));
  };

  // Handle editing a recipe
  const handleEditRecipe = (index) => {
    const recipe = recipes[index];
    setRecipeName(recipe.recipeName);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    setImage(recipe.image); // Set the selected image
    setEditIndex(index);
    handleShow();
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  // Clear the form fields
  const clearForm = () => {
    setRecipeName('');
    setIngredients('');
    setInstructions('');
    setImage(null);
    setEditIndex(null);
  };

  return (
    <>
      <div className='bg-dark '>
        <div className='p-5 bg-dark d-flex justify-content-center  '>
          <button className='btn d-flex justify-content-between row mt-5' onClick={handleShow}>
            <div className='col w-75 d-flex justify-content-center bg-danger p-3 me-5' style={{ borderRadius: "20px" }}>
              <h3>Add Your Recipes</h3>
            </div>
          </button>
        </div>

        <div className='p-5 border border-danger' style={{ borderRadius: "20px" }}>
          {recipes.map((recipe, index) => (
            <Card key={index} style={{ width: '25rem' }}>
              <Card.Img variant="top" src={recipe.image || "https://via.placeholder.com/150"} /> {/* Display selected image or a placeholder */}
              <Card.Body>
                <Card.Title>{recipe.recipeName}</Card.Title>
                <Card.Text>
                  <label>Ingredients: </label> {recipe.ingredients}
                </Card.Text>
                <Card.Text>{recipe.instructions}</Card.Text>
                <div className='d-flex justify-content-center p-4'>
                  <button className='btn' onClick={() => handleDeleteRecipe(index)}>
                    <i className="fa-solid fa-trash fa-xl me-3" style={{ color: "#e61405" }} />
                  </button>
                  <button className='btn' onClick={() => handleEditRecipe(index)}>
                    <i className="fa-solid fa-pen-to-square fa-xl" style={{ color: "#FFD43B" }} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Modal for Adding/Editing a Recipe */}
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>{editIndex === null ? 'Add Recipe' : 'Edit Recipe'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12} md={5}>
                <label>
                  <input type="file" onChange={handleImageChange} style={{ display: "none" }} />
                  <img
                    src={image || "https://via.placeholder.com/150"}
                    className='img-fluid'
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={() => document.querySelector('input[type="file"]').click()}
                  />
                </label>
              </Col>
              <Col sm={12} md={7}>
                <input
                  type="text"
                  className='form-control mb-3 mt-3'
                  placeholder='Recipe Name'
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                />
                <input
                  type="text"
                  className='form-control mb-3'
                  placeholder='Recipe Ingredients'
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
                <textarea
                  placeholder='Instructions'
                  className='form-control mb-3'
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleAddRecipe}>{editIndex === null ? 'Add Recipe' : 'Update Recipe'}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Yourpage;
