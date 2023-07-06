import { useState } from "react";

import Container from "../UI/Container";
import ProgressBar from "../UI/ProgressBar";
import Card from "../UI/Card";
import ButtonPrimary from "../UI/ButtonPrimary";
import ButtonSecondary from "../UI/ButtonSecondary";

import PersonalInfo from "./PersonalInfo";
import YourPlan from "./YourPlan";
import Addons from "./Addons";
import FinishigUp from "./FinishigUp";
import ThankYou from "./ThankYou";

import classes from "./RootLayout.module.css";

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
        <section className={classes["footer__section"]}>
          {page !== 0 ? (
            <ButtonSecondary
              text="Go Back"
              disabled={page === 0}
              onClick={() => setPage((currPage) => currPage - 1)}
            ></ButtonSecondary>
          ) : (
            <div></div>
          )}
          <ButtonPrimary
            disabled={page === formTitles.length - 1}
            onClick={() => setPage((currPage) => currPage + 1)}
          >
            {page === 3 ? "Confirm" : "Next Step"}
          </ButtonPrimary>
        </section>
      </footer>
    </main>
  );
};

export default RootLayout;
