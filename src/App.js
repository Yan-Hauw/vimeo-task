import "./App.css";

function App() {
  return (
    <>
      <div className="lightSection">
        <div className="content">
          <div className="pictureContainer">
            <img
              src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
              className="picture"
              alt=""
            />
          </div>

          <div className="text">
            <h3 className="title">MONSOON III</h3>

            <h5 className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h5>
          </div>
        </div>
      </div>

      <div className="darkSection"></div>

      <div className="graySection"></div>
    </>
  );
}

export default App;
