import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateBlog from "./Components/CreateBlog";
import Body from "./Components/Body";
import ErrorPage from "./Components/ErrorPage";
import store from "./store/Store";
import { Provider } from "react-redux";
import EditBlog from "./Components/EditBlog";
import DisplayBlogOnclick from "./Components/DisplayBlogOnclick";

function App() {
  return (
    <div className="w-screen min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />} errorElement={<ErrorPage />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blog/edit" element={<EditBlog />} />
            <Route path="/Blog" element={<DisplayBlogOnclick/>} />
            <Route path="/Blog/:id" element={<DisplayBlogOnclick/>} />
            <Route path="/Blog/edit/:id" element={<EditBlog/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
