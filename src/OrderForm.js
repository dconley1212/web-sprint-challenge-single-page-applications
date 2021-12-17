import React from "react";

export default function pizzaForm() {
  return (
    <div className="order-form">
      <h2>Build your Pizza</h2>
      <form>
          <label> Name:
              <input
              id='name-input'
              type='text'
              name='name'
              value={}
              />
          </label>
          <label>Pizza Size:
              <select name='size' value={} >
                  <option value='Small'>Small</option>
                  <option value='Medium'>Medium</option>
                  <option value='Large'>Large</option>
                  <option value='Extra-Large'>Extra-Large</option>
              </select>
          </label>
          <label>Peperoni:
              <input 
              type='checkbox'
              name='peperoni'
              checked={}
              />
          </label>
          <label>Onions:
              <input
              type='checkbox'
              name='onions'
              checked={}
              />
          </label>
          <label>Green-peppers:
              <input 
              type='checkbox'
              name='green-peppers'
              checked={}
              />
          </label>
          <label>
              <input 
              type='checkbox'
              name='olives'
              checked={}
              />
          </label>
          <label>
              <input type='text' name='Special' value={}/>
          </label>
      </form>
    </div>
  );
}
