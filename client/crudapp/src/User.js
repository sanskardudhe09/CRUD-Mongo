import "./App.css";
const User = ({value}) => {
    return (
      <>
        <div className="eachuser">
           <h4> Name: {value.name}</h4>
           <h4>Email: {value.email}</h4>
           <h4>Age: {value.age}</h4>
           <h4>Role: {value.role}</h4>
        </div>
      </>
    )
}
export default User;