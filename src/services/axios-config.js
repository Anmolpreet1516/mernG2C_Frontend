import axios from "axios";

const baseURL="http://localhost:2004";

const publicAxios=axios.create({baseURL});

export {publicAxios,baseURL};
