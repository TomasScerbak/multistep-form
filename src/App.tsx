import { useState } from "react";

import Container from "./components/UI/Container";
import PersonalInfo from "./components/PersonalInfo";
import YourPlan from "./components/YourPlan";
import Addons from "./components/Addons";
import FinishigUp from "./components/FinishigUp";
import ThankYou from "./components/ThankYou";

function App() {
  const [page, setPage] = useState<number>(0);

  const FormTitles: string[] = [
    "Personal Info",
    "Select Your Plan",
    "Pick Add-ons",
    "Fisnishig Up",
    "Thank you",
  ];

  const pageChange = () => {
    if (page === 0) {
      return <PersonalInfo />;
    } else if (page === 1) {
      return <YourPlan />;
    } else if (page === 2) {
      return <Addons />;
    } else if (page === 3) {
      return <FinishigUp />;
    } else {
      return <ThankYou />;
    }
  };

  return (
    <div className="App">
      <Container>
        <header>
          <h1>{FormTitles[page]}</h1>
        </header>
        <div>{pageChange()}</div>
      </Container>
      <footer>
        <button
          disabled={page === 0}
          onClick={() => setPage((currPage) => currPage - 1)}
        >
          Go Back
        </button>
        <button
          disabled={page === FormTitles.length - 1}
          onClick={() => setPage((currPage) => currPage + 1)}
        >
          Next Step
        </button>
      </footer>
    </div>
  );
}

export default App;
