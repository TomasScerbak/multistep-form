import { useState } from "react";

import Container from "./components/UI/Container";
import PersonalInfo from "./components/pages/PersonalInfo";
import YourPlan from "./components/pages/YourPlan";
import Addons from "./components/pages/Addons";
import FinishigUp from "./components/pages/FinishigUp";
import ThankYou from "./components/pages/ThankYou";
import ProgressBar from "./components/UI/ProgressBar";

function App() {
  const [page, setPage] = useState<number>(0);

  const formTitles: string[] = [
    "Personal Info",
    "Select Your Plan",
    "Pick Add-ons",
    "Fisnishig Up",
    "Thank you",
  ];

  const pageChange = () => {
    if (page === 0) {
      return (
        <PersonalInfo description="Please provide your name, email address, and phone number." />
      );
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
        <ProgressBar page={page} />
        <header>
          <h1>{formTitles[page]}</h1>
        </header>
        <div>{pageChange()}</div>
      </Container>
      <footer>
        {page !== 0 ? (
          <button
            disabled={page === 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Go Back
          </button>
        ) : null}
        <button
          disabled={page === formTitles.length - 1}
          onClick={() => setPage((currPage) => currPage + 1)}
        >
          {page === 3 ? "Confirm" : "Next Step"}
        </button>
      </footer>
    </div>
  );
}

export default App;
