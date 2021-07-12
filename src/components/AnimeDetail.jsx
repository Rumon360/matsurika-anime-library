import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Get Data
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const AnimeDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { screen, anime, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {anime.title}
                </motion.h3>
                <p>Rating : {anime.score}</p>
              </div>
              <Info>
                <h3>Genre: </h3>
                <Genres>
                  {anime.genres.map((data) => (
                    <h3 key={data.mail_id}>{data.name}</h3>
                  ))}
                </Genres>
              </Info>
            </Stats>
            <Media>
              <iframe
                width="1280"
                height="480"
                title={pathId}
                src={anime.trailer_url}
              ></iframe>
            </Media>
            <Description>
              <p>{anime.synopsis}</p>
            </Description>
            <div className="gallery">
              {screen.pictures.map((screen) => (
                <img
                  layoutId={`image ${pathId}`}
                  src={screen.large}
                  alt="screen.large"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 480px) {
      img {
        width: 100%;
      }
    }
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  @media (max-width: 480px) {
    padding: 0rem 0rem;
    width: 80%;
  }
  img {
    width: 30%;
    height: 50vh;
    object-fit: contain;
    margin-bottom: 2rem;
  }

  iframe {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Genres = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
  h3 {
    padding: 0.5rem;
    @media (max-width: 480px) {
    }
  }
  img {
    margin-left: 3rem;
    @media (max-width: 480px) {
    }
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media (max-width: 480px) {
    padding: 1rem;
    p {
      font-size: 1rem;
    }
  }
`;

export default AnimeDetail;
