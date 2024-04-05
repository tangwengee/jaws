import { FC } from "react";
import { Profile } from "../component/Profile";
import { ProgressCard } from "../component/ProgressCard";
import { PageTemplate } from "./pageTemplate";

export const ProgressPage: FC = () => {
  return (
    <PageTemplate>
      <div style={{ paddingBottom: "30px", paddingTop: "20px" }}>
        <Profile />
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProgressCard />
      </div>
    </PageTemplate>
  );
};
