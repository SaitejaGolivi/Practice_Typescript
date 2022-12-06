export interface AppName {
  name: string;
}
export interface Address {
  houseNo: number;
  street: string;
  town: string;
}
export interface Student {
  name: string;
  surname: string;
  age?: number;
  address?: Address;
}
function Interfaces() {
  return <div>Interfaces</div>;
}

export default Interfaces;
