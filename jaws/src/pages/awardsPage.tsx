import { FC } from "react";
import { BackArrow } from "../component/BackArrow";
import { Link } from "react-router-dom";
import { PageTemplate } from "./pageTemplate";
import { LeaderboardTable } from "../component/LeaderboardTable";
import { LeaderboardFilter } from "../component/LeaderboardFilter";

export const AwardsPage: FC = () => {
  return (
    <PageTemplate>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
          padding: "10px"
        }}
      >
        <Link
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <BackArrow />
        </Link>
        <h1>Awards Page</h1>
        <p>icon</p>
      </div>

      <LeaderboardFilter>
        <LeaderboardTable />
      </LeaderboardFilter>
    </PageTemplate>
  );
};
