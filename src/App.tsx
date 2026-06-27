import "./App.css";
import "./styles/index.scss";
import "./styles/GlobalStyle.scss";

import RecentTabs from "./components/RecentTabs/RecentTabs";
import SystemList from "./components/SystemList/SystemList";

/**
 * Root application component.
 *
 * This application is designed as a Micro‑Frontend remote module.
 * Components such as RecentTabs and SystemList can be exposed
 * and consumed by a host application through Module Federation.
 */
function App(): JSX.Element {
  return (
    <div className="App">
      {/* Application title */}
      <h1>Remote Application</h1>

      {/* Recently visited systems/tabs */}
      <RecentTabs />

      <div className="card">
        {/* List of available systems */}
        <SystemList />
      </div>
    </div>
  );
}

export default App;
