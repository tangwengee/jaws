import { FC } from "react";
import { CurrentWeek } from "../CurrentWeek";
import { ProgressCircle } from "../ProgressCircle";

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
        <div>Daily Challenges</div>
        <div>Update your goals</div>
      </div>
    );
  };