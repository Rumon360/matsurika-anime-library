import axios from "axios";
import { getDetailsUrl, animeScreenShotUrl } from "../api";

const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailDate = await axios.get(getDetailsUrl(id));
  const screenShot = await axios.get(animeScreenShotUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      anime: detailDate.data,
      screen: screenShot.data,
    },
  });
};

export default loadDetail;
