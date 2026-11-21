import { Routes, Route } from "react-router-dom";
import Home from '../Home'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Amaan from '../profiles/Amaan'
import Rishabh from '../profiles/Rishabh'
import Sulabh from '../profiles/Sulabh'
import BlogLayout from '../layouts/BlogLayout'
function App() {
  return (
    <Routes>
      <Route element={<BlogLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />}/>
        <Route path="/amaan" element={<Amaan/>}/>
        <Route path="/sulabh" element={<Sulabh/>}/>
        <Route path="/rishabh" element={<Rishabh/>}/>
      </Route>
    </Routes>
  );
}
export default App;