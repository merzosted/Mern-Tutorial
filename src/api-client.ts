import axios from "axios"
import { API_SERVER_URL } from "./public-config"


export const fetchContests = async () => {
    const resp = await axios.get(`${API_SERVER_URL}/contests`)
    return resp.data.contests
}

export const fetchSingleContest= async (contestId) => {
    const resp = await axios.get(`${API_SERVER_URL}/contests/${contestId}`)
    return resp.data.contest
}

export const addNewNameToContest = async ({
  contestId,
  newNameValue,
}) => {
  const resp = await axios.post(
    `${API_SERVER_URL}/contests/${contestId}`,
    { newNameValue },
  );
  return resp.data.updatedContest;
};