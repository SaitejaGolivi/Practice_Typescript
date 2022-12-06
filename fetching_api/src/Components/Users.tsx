import React, { useEffect, useState } from "react";
import { IUsers } from "../Model/IUsers";
import UsersService from "../Services/UsersService";


interface IState {
  Person: IUsers[];
}

function Users() {
  const [state, setState] = useState<IState>({
    Person: [] as IUsers[],
  });
  
  //Network Request
  useEffect(() => {
    setState({ ...state });
    UsersService()
      .then((res) => {
        console.log(res.data);
        setState({ ...state, Person: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  const { Person } = state;

  return (
    <div className="Parent">
      <h1>Fetching Data from API</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>ADDRESS</td>
            <td>PHONE</td>
            <td>WEBSITE</td>
            <td>COMPANY</td>
          </tr>
        </thead>
        <tbody>
          {Person.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td>{el.address.city}</td>
              <td>{el.phone}</td>
              <td>{el.website}</td>
              <td>{el.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
