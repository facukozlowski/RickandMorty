import { useState } from "react";
import "./Form.style.css";
import validation from "./validation";

export const Form = ({ login }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...user,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(user);
  };

  return (
    <form className="container-form">
      <label className="label-email">Email:</label>
      <input
        name="email"
        className="input"
        placeholder="usuario@gmail.com"
        type="email"
        value={user.email}
        onChange={handleChange}
      />
      {errors.email && <span>{errors.email}</span>}
      <label className="label-email">Password:</label>
      <input
        name="password"
        className="input"
        placeholder="********"
        type="password"
        value={user.password}
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}

      <button className="btn-submit" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
