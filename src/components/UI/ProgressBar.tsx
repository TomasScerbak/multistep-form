import { useEffect, useState } from "react";

import SideBarDesktopImage from "../../assets/bg-sidebar-desktop.svg";
import SideBarMobileImage from "../../assets/bg-sidebar-mobile.svg";

const ProgressBar = () => {
  const [userWidth, setUserWidth] = useState<number>(window.innerWidth);

  const updateMedia = () => {
    setUserWidth(userWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", () => updateMedia);
  }, []);

  return (
    <div>
      <img
        src={userWidth > 769 ? SideBarDesktopImage : SideBarMobileImage}
        alt="decoration"
      />
    </div>
  );
};

export default ProgressBar;
