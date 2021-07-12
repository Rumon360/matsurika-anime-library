import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction";
import { Link } from "react-router-dom";
// Animation
import { popUp } from "../animation";

const Anime = ({ name, type, episode, image, id }) => {
  const stringId = id.toString();
  // Load Detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledAnime
      layoutId={stringId}
      onClick={loadDetailHandler}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Link to={`/anime/${id}`}>
        <div>
          <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
          <p>
            {`${type}`}
            <span> ({`${episode === null ? "?" : episode}`} eps)</span>
          </p>
        </div>
        <motion.img layoutId={`image ${stringId}`} src={image} alt={name} />
      </Link>
    </StyledAnime>
  );
};
const StyledAnime = styled(motion.div)`
  min-height: 30vh;
  width: 80%;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  background: white;
  @media (max-width: 480px) {
    min-height: 20vh;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: contain;
    @media (max-width: 480px) {
      height: 40vh;
    }
  }
  a {
    text-decoration: none;
    color: #333;
  }
`;
export default Anime;
