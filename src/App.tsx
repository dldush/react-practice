import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PracticeUseState from "./hooks/PracticeUseState";
import PracticeUseEffect from "./hooks/PracticeUseEffect";
import PracticeUseCallback from "./hooks/PracticeUseCallback";
import PracticeUseMemo from "./hooks/PracticeUseMemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Hooks</h1>
              <ol>
                <li>
                  <Link to="/usestate">useState</Link>
                </li>
                <li>
                  <Link to="/useeffect">useEffect</Link>
                </li>
                <li>
                  <Link to="/usecallback">useCallback</Link>
                </li>
                <li>
                  <Link to="/usememo">useMemo</Link>
                </li>
                <li>useActionState</li>
                <li>useContext</li>
                <li>useDebugValue</li>
                <li>useDeferredValue</li>
                <li>useId</li>
                <li>useImperativeHandle</li>
                <li>useInsertionEffect</li>
                <li>useLayoutEffect</li>
                <li>useReducer</li>
                <li>useRef</li>
                <li>useSyncExternalStore</li>
                <li>useTransition</li>
              </ol>
            </div>
          }
        />
        <Route path="/usestate" element={<PracticeUseState />} />
        <Route path="/useeffect" element={<PracticeUseEffect />} />
        <Route path="/usecallback" element={<PracticeUseCallback />} />
        <Route path="/usememo" element={<PracticeUseMemo />} />
      </Routes>
    </Router>
  );
}

export default App;
