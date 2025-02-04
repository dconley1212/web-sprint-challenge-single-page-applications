import React from "react";

export default function OrderForm({
  orderInfo,
  orderChange,
  orderSubmit,
  disabled,
  errors,
}) {
  const handleChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueProvided = type === "checkbox" ? checked : value;
    orderChange(name, valueProvided);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    orderSubmit();
  };

  return (
    <div className="order-form">
      <h2>Build your Pizza</h2>
      <form onSubmit={handleSubmit} id="pizza-form">
        <label>
          {" "}
          Name:
          <input
            id="name-input"
            type="text"
            name="name"
            value={orderInfo.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Pizza Size:
          <select
            name="size"
            value={orderInfo.size}
            onChange={handleChange}
            id="size-dropdown"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra-Large">Extra-Large</option>
          </select>
        </label>
        <label>
          Peperoni:
          <input
            type="checkbox"
            name="peperoni"
            checked={orderInfo.peperoni}
            onChange={handleChange}
          />
        </label>
        <label>
          Onions:
          <input
            type="checkbox"
            name="onions"
            checked={orderInfo.onions}
            onChange={handleChange}
          />
        </label>
        <label>
          Green-peppers:
          <input
            type="checkbox"
            name="peppers"
            checked={orderInfo.peppers}
            onChange={handleChange}
          />
        </label>
        <label>
          Olives:
          <input
            type="checkbox"
            name="olives"
            checked={orderInfo.olives}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Special Instructions:
          <input
            type="text"
            name="special"
            value={orderInfo.special}
            onChange={handleChange}
            id="special-text"
          />
        </label>
        <button id="order-button" disabled={disabled}>
          Submit!
        </button>
        <div className="errors">
          <p>{errors.name}</p>
        </div>
      </form>
    </div>
  );
}
