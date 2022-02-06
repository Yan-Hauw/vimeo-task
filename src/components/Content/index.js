import "./Content.css";

const Content = ({ imageUrl, title, inverted = false }) => {
  return (
    <div className="content">
      {!inverted && (
        <div className="pictureContainer">
          <img src={imageUrl} className="picture" alt="" />
        </div>
      )}

      <div className="text">
        <h3 className="title">{title}</h3>

        <h5 className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h5>
      </div>

      {inverted && (
        <div className="pictureContainer">
          <img src={imageUrl} className="picture" alt="" />
        </div>
      )}
    </div>
  );
};

export default Content;
