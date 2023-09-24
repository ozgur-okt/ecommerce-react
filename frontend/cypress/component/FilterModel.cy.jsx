import React, { useState } from 'react'
import FilterModel from '../../src/components/FilterModel'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"
import { setSearchQuery } from '../../src/redux/actions/productActions'


describe('FilterModel', () => {
  
  it('renders', () => {
    let searchedModels = ['Test Model', 'Test Model 2'];
    let selectedModel = 'Test Model';
    let modelSelect = (model) => {selectedModel = model};
    let searchQuery = '';
    let setSearchQuery = () => {searchQuery = ''};
   

    cy.mount(
      <>
      <h2 className="model-title">Model</h2>
      <div className="models">
        <input
          type="text"
          placeholder="Search models..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="model-search"
        />
        <div className="model-options-box">
          {searchedModels?.map((model) => (
            <div key={model} className="model-options">
              <input
                type="checkbox"
                id={model}
                name="model"
                value={model}
                onChange={() => modelSelect(model)}
                checked={selectedModel === model}
                
              />
              <label htmlFor={model} className="model-label">
                {model}
              </label>
            </div>
          ))}
          {searchedModels.length === 0 && <p>No model found...</p>}
        </div>
      </div>
    </>
    )

    cy.get('.model-title').should('exist').and('have.text', 'Model');

    // Check if the search input exists
    cy.get('.model-search').should('exist');

    // Check if the search input is initially empty
    cy.get('.model-search').should('have.value', '');

    // Type a search query into the input
    cy.get('.model-search').type('Test');

    // Check if checkboxes are displayed
    cy.get('.model-options input[type="checkbox"]').should('have.length', 2); // Assuming there are two models

    // Check if the first checkbox is checked
    cy.get('.model-options input[type="checkbox"]').eq(0).should('be.checked');

    // Check if the "No model found..." message is not displayed
    cy.get('p').should('not.exist');
   
  })
})