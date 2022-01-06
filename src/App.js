import { AboutMe } from './components/sections/AboutMe';
import {Home} from './components/sections/Home';
import {Projects} from './components/sections/Projects';

function App() {
  return (
    <div className="w-full h-full">
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
