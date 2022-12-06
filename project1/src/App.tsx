/**
 *
 * @param param0
 * @returns
 * @description main app
 */

import "./App.css";
import { useState } from "react";

// AppName is an interface that has a property called name.
// An interface is an abstract type that the compiler uses to know which property names a given object can have.
// Maily it is used for "type type checking"
export interface AppName {
  name: string;
}
export interface Student {
  name?: string | any;
  surname: string;
  age?: number;
  address?: {
    houseno: number;
    street: string;
    town: string;
  };
}

function App({ name }: AppName) {
  const [student, setStudent] = useState<Student | null>(null);
  /*In the above line of code student can be either null or student object.
  This is denoted by the code usestate<Studen | null>(null).
  This concept is Union types.
  Union types is nothing but when we have an object that can be of having different datatypes.
   for Example 
   const< student |null |boolean >(null).
  In this case student |null|boolean are Union Types*/
  const addStudent = () => {
    setStudent({
      name: "Saiteja",
      surname: "Golivi",
      age: 24,
    });
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>
        <b>
          {student?.name} {student?.surname}
        </b>
      </p>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default App;
