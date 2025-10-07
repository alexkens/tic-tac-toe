const { useState } = React;

function App() {    
  const [user, setUser] = useState({ name: "Juan" });

  function changeUserName() {
    if(user.name == "Peter") {
        setUser({
            ...user,
            name: "Juan"
        });
        
    } else {
        setUser({
            ...user,
            name: "Peter"
        });
    }
    console.log(user);
  }

  return (
    <div className="App">
      <MyComponent user={user} />

      <button onClick={changeUserName}>Change user name</button>
    </div>
  );
}

function MyComponent(props) {
  return (
    <div>
      <h1>My Component</h1>
      { console.log("Im Component: ") }
      {console.log(props)}
      <p>User name: {props.user.name}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);