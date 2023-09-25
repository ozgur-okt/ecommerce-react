import React from 'react'

describe('ProductDetails', () => {
  it('renders', () => {

    let readMore = false
    const setReadMore = () => { readMore = !readMore }

    const oneProduct = {
      createdAt: "2023-07-17T07:21:02.529Z",
      name: "Bentley Focus",
      image: "https://loremflickr.com/640/480/food",
      price: "51.00",
      description: "Quasi adipisci nulla iure.",
      model: "CTS",
      brand: "Lamborghini",
      id: "1"
    }

    cy.mount(
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
                  <p className="pd-description">{oneProduct?.description.slice(0, 200) + '...'}</p>
                  <a className="read-more" onClick={() => setReadMore()}>Read more</a>
                </>
              }
            </div>
          </div>
        </div>
    )
    cy.get('.pd-content img').should('be.visible')

    cy.get('.pd-info h2').should('have.text', 'Bentley Focus')

    cy.get('.pd-price').should('have.text', '$51.00')

    cy.get('button').should('have.text', 'Add To Cart')

    cy.get('.read-more').should('have.text', 'Read more')

    cy.get('.read-more').click()

    cy.get('.pd-description').should(
      'have.text',
      'Quasi adipisci nulla iure.'.slice(0, 200) + '...'
    )
  })
})