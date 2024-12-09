const ParentComponent = () => {
const [childData, setChildData] = React.useState("");
const handleDataFromChild = (data) => {
    setChildData(data);
};
    return (
      <div>
        <h1>Data from Child: {childData}</h1>
        <ChildComponent sendData={handleDataFromChild}/>
      </div>
    );
  };

const ChildComponent = (props) => {
const [inputValue, setInputValue] = React.useState("");
 const handleInputChange = (e) => {
    setInputValue(e.target.value);
};
const sendDataToParent = () => {
    props.sendData(inputValue);
    };
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button onClick={sendDataToParent}>Send Data to Parent</button>
      </div>
    );
  };

ReactDOM.render(<ParentComponent />, document.getElementById("root"));