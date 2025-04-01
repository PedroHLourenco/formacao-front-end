// aula 424 - custom instance
const postsFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    Authorization: "meunovotoken",
  },
});
