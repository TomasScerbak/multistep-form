import { useState } from "react";

import Container from "../UI/Container";
import ProgressBar from "../UI/ProgressBar";
import Card from "../UI/Card";

import PersonalInfo from "./PersonalInfo";
import YourPlan from "./YourPlan";
import Addons from "./Addons";
import FinishigUp from "./FinishigUp";
import ThankYou from "./ThankYou";

const RootLayout = () => {
  const [page, setPage] = useState<number>(0);

  const formTitles: string[] = [
    "Personal Info",
    "Select Your Plan",
    "Pick Add-ons",
    "Fisnishig Up",
    "",
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
    <main>
      <Container>
        <ProgressBar page={page} />
        <Card>
          <header>
            <h1>{formTitles[page]}</h1>
          </header>
          <div>{pageChange()}</div>
        </Card>
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
    </main>
  );
};

export default RootLayout;
