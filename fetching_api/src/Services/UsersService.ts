import axios from "axios";


function UsersService() {
  let URL: string = "https://jsonplaceholder.typicode.com/users";

  return axios.get(URL);
}

export default UsersService;
