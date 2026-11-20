import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import BlogLayout from '../layouts/BlogLayout'
function App() {
  return (
    <Routes>
      <Route element={<BlogLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2 />} />
      </Route>
    </Routes>
  );
}
export default App;