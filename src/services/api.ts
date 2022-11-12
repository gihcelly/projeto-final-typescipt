interface IApi {
  baseURL: string;
  clientId: string;
  clientSecret: string;
}

const API: IApi = {
  baseURL: "https://api.github.com/users/",
  clientId: "f276e6fc05e4877edca5",
  clientSecret: "d2cf3e3255b0e36a50c13126079c2cfb4d3185a3",
};

export default API;
