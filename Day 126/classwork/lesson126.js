const imageUrls = [
    "https://via.placeholder.com/150/0000FF/808080?text=Image+1",
    "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+2",
    "https://via.placeholder.com/150/FFFF00/000000?text=Image+3",
    "https://via.placeholder.com/150/008000/FFFFFF?text=Image+4",
    "https://via.placeholder.com/150/000000/FFFFFF?text=Image+5"
  ];

  const imageElements = imageUrls.map((url, index) => (
    <img key={index} src={url} alt={`Image ${index + 1}`} />
  ));
  ReactDOM.render(
    <div>{imageElements}</div>,
    document.getElementById("root")
);
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const nameList = names.map((name, index) => (
    <li key={index}>{name}</li>
  ));
  ReactDOM.render(
    <ul>{nameList}</ul>,
    document.getElementById("root")
  );

