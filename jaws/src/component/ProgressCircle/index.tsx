import { FC } from "react";
import { Progress, ProgressProps } from "antd";
import { Leaf } from "../Leaf";

const conicColors: ProgressProps["strokeColor"] = {
  "0%": "#87d068",
  "50%": "#ffe58f",
  "100%": "#ffccc7",
};

export const ProgressCircle: FC = () => {
  const textInCircle = (percent?: number) => (
    <div
      style={{
        fontSize: 14,
        display: "flex",
        flexDirection: "column",
        fontWeight: "800",
        gap: 15,
      }}
    >
      <div>
        Current {percent} <Leaf/>
      </div>
      <div>
        Goal 123 <Leaf/>
      </div>
    </div>
  );
  return (
    <div>
      <Progress
        type="dashboard"
        percent={93}
        format={(percent?: number) => <div>{textInCircle(percent)}</div>}
        strokeColor={conicColors}
        size={200}
      />
    </div>
  );
};
