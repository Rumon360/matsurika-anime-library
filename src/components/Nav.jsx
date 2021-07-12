import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/Logo.svg";
// Redux and Routes
import { fetchSearch, clearSearch } from "../actions/animesAction";
import { useDispatch } from "react-redux";
// Animation
import { fadeIn } from "../animation";
const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const searchClearHandler = () => {
    dispatch(clearSearch());
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <img
        className="logo"
        src={logo}
        alt="logo"
        onClick={searchClearHandler}
      ></img>
      <p>Anime Library</p>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  input {
    width: 80%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    margin-bottom: 1rem;
    @media (max-width: 480px) {
      width: 80%;
      margin-bottom: 1rem;
    }
  }
  h1 {
    font-size: 3rem;
    cursor: pointer;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    margin-left: 0.5rem;
    &:hover {
      background: #f55353;
    }
  }
  .logo {
    width: 30%;
    cursor: pointer;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  p {
    color: white;
    font-size: 1.2rem;
  }
`;

export default Nav;
