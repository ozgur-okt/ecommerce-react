import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'



describe('ProductDetails', () => {
  it('renders', () => {

  let readMore = false;
  const setReadMore = () => {readMore = !readMore};

    const oneProduct  = {
      createdAt: "2023-07-17T07:21:02.529Z",
      name: "Bentley Focus",
      image: "https://loremflickr.com/640/480/food",
      price: "51.00",
      description: "Quasi adipisci nulla iure.",
      model: "CTS",
      brand: "Lamborghini",
      id: "1"
    };

    cy.mount(
 
        <BrowserRouter>
          <div className="pd ">
            <div className="pd-content ">
              <div className="image-box">
                <img
                  src={oneProduct?.image}
                  alt={oneProduct?.name}
                />
              </div>
              <div className="pd-info">
                <h2>{oneProduct?.name}</h2>
                <p className="pd-price ">${oneProduct?.price}</p>
                <button>
                  Add To Cart
                </button>
                {readMore ?
                  <>
                    <p className="pd-description">{oneProduct?.description}</p>
                    <a className="show-less" onClick={() => setReadMore()}>Show less</a>
                  </>
                  :
                  <>
                    <p className="pd-description">{oneProduct?.description.slice(0, 200)+'...'}</p>
                    <a className="read-more" onClick={() => setReadMore()}>Read more</a>
                  </>
                }
              </div>
            </div>
          </div>
        </BrowserRouter>
    )
    cy.get('.pd-content img').should('be.visible');

    // Check if the product name is displayed
    cy.get('.pd-info h2').should('have.text', 'Bentley Focus');

    // Check if the product price is displayed
    cy.get('.pd-price').should('have.text', '$51.00');

    // Check if the "Add To Cart" button is displayed
    cy.get('button').should('have.text', 'Add To Cart');

    // Check if the "Read more" link is displayed
    cy.get('.read-more').should('have.text', 'Read more');

    // Click the "Read more" link to expand the description
    cy.get('.read-more').click();

    // Check if the full description is displayed
    cy.get('.pd-description').should(
      'have.text',
      'Quasi adipisci nulla iure.'.slice(0, 200) + '...'
    );
   
    


  })
})