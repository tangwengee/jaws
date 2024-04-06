import { FC, useState } from "react";
import { BackArrow } from "../component/BackArrow";
import { Link } from "react-router-dom";
import { PageTemplate } from "./pageTemplate";
import { LeaderboardTable } from "../component/LeaderboardTable";
import { LeaderboardFilter } from "../component/LeaderboardFilter";
import { Leaf } from "../component/Leaf";
import { Level } from "../component/Level";

export const AwardsPage: FC = () => {

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("friends");

  const handleMenuItemClick = (key: string) => {
    setSelectedMenuItem(key);
  };
  
  return (
    <PageTemplate>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
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
        <h1 style={{ marginLeft: "10%" }}>Achievements</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            marginRight: "10px",
            backgroundColor: "#cef4f5",
            height: "50px",
            borderRadius: "15px",
            width: "100px",
            fontWeight: "800",
            paddingLeft: "10px",
            boxShadow: "3px 3px #639191 ",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Level /> Level 23
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              gap: "10px",
              paddingLeft: "5px",
            }}
          >
            <Leaf />
            <div>744</div>
          </div>
        </div>
      </div>

      <LeaderboardFilter selectedKey={selectedMenuItem} onMenuItemClick={setSelectedMenuItem}>
        <LeaderboardTable selectedKey={selectedMenuItem}/>
      </LeaderboardFilter>
    </PageTemplate>
  );
};
