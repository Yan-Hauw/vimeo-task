import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div className="lightSection">
        <Content
          imageUrl="https://i.vimeocdn.com/video/595198868_505x160.jpg"
          title="MONSOON III"
          inverted
        />
      </div>

      <div className="darkSection"></div>

      <div className="graySection"></div>
    </>
  );
}

export default App;
