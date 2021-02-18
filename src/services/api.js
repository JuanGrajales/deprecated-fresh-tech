import axios from "axios";

const service = axios.create({ baseURL: "http://localhost:3001" });

const actions = {
  entries: async (entryType) => {
    return await service.get(`/entries?entryType=${entryType}`);
  },
  seed: async () => {
    return await service.post("/seed");
  },
  drop: async () => {
    return await service.post("/drop-db");
  },
};

export default actions;
