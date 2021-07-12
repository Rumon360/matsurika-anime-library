import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadAnimes } from "../actions/animesAction";
// Components
import Anime from "../components/Anime";
import AnimeDetail from "../components/AnimeDetail";
// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GlobalStyles from "../components/GlobalStyles";
import { useLocation } from "react-router-dom";
// Animation
import { fadeIn } from "../animation";
const Home = () => {
  // Current Location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // Fetch Animes
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAnimes());
  }, [dispatch]);
  // Get that date back
  const { top, airing, upcoming, searched } = useSelector(
    (state) => state.animes
  );
  return (
    <AnimeList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <AnimeDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="search">
            <h2>Searched Animes</h2>
            <Animes>
              {searched.map((anime) => (
                <Anime
                  name={anime.title}
                  type={anime.type}
                  episode={anime.episodes}
                  id={anime.mal_id}
                  key={anime.mal_id}
                  image={anime.image_url}
                />
              ))}
            </Animes>
          </div>
        ) : (
          ""
        )}
        <h2>Top Airing</h2>
        <Animes>
          {airing.map((anime) => (
            <Anime
              name={anime.title}
              type={anime.type}
              episode={anime.episodes}
              id={anime.mal_id}
              key={anime.mal_id}
              image={anime.image_url}
            />
          ))}
        </Animes>
        <motion.h2>Top Upcoming </motion.h2>
        <Animes>
          {upcoming.map((anime) => (
            <Anime
              name={anime.title}
              type={anime.type}
              episode={anime.episodes}
              id={anime.mal_id}
              key={anime.mal_id}
              image={anime.image_url}
            />
          ))}
        </Animes>
        <motion.h2>Top Anime Series</motion.h2>
        <Animes>
          {top.map((anime) => (
            <Anime
              name={anime.title}
              type={anime.type}
              episode={anime.episodes}
              id={anime.mal_id}
              key={anime.mal_id}
              image={anime.image_url}
            />
          ))}
        </Animes>
      </AnimateSharedLayout>
    </AnimeList>
  );
};
const AnimeList = styled(motion.div)`
  padding: 0rem 5rem;
  @media (max-width: 480px) {
    padding: 0rem 2rem;
  }
  h2 {
    padding: 5rem 0rem;
    color: white;
    font-weight: bold;
    @media (max-width: 480px) {
      padding: 2rem 0rem;
    }
  }
`;
const Animes = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 480px) {
    min-height: 50vh;
    grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    grid-column-gap: 2rem;
  }
`;
export default Home;
