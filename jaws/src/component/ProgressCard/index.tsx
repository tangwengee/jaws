import { FC } from "react";
import { CurrentWeek } from "../CurrentWeek";
import { ProgressCircle } from "../ProgressCircle";
import { Link } from "react-router-dom";

export const ProgressCard: FC = () => {
    return (
        <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "93vw",
          padding: "20px",
          backgroundColor: "rgb(43, 201, 204, 0.2)",
          borderRadius: "20px",
        }}
      >
        <CurrentWeek />
        <ProgressCircle />
        <div><h1>Daily Challenges</h1></div>
        <Link to={"/journey"}><div>Update your goals</div></Link>
      </div>
    );
  };