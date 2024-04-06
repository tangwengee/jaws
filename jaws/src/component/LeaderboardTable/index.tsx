import { Avatar } from "antd";
import { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Leaf } from "../Leaf";

interface LeaderboardItem {
  rank: number;
  username: string;
  score: string | number;
}

const top3FriendsLeaderBoardData: LeaderboardItem[] = [
  { rank: 2, username: "Avril", score: 901 },
  { rank: 1, username: "Shuang", score: 920 },
  { rank: 3, username: "Javier", score: 877 },
];

const dummyFriendsLeaderboardData: LeaderboardItem[] = [
  { rank: 4, username: "John", score: 843 },
  { rank: 5, username: "Mary", score: 833 },
  { rank: 6, username: "Polly", score: 803 },
  { rank: 7, username: "You", score: 744 },
  { rank: 8, username: "Mark", score: 720 },
  { rank: 9, username: "Alexa", score: 711 },
  { rank: 10, username: "Sam", score: 702 },
];

const top3EstateLeaderBoardData: LeaderboardItem[] = [
  { rank: 2, username: "Bishan", score: "530k" },
  { rank: 1, username: "Punggol", score: "551k" },
  { rank: 3, username: "Aljunied", score: "528k" },
];

const dummyEstateLeaderboardData: LeaderboardItem[] = [
  { rank: 4, username: "Serangoon", score: "518k" },
  { rank: 5, username: "Marymount", score: "513k" },
  { rank: 6, username: "Toa Payoh", score: "502k" },
  { rank: 7, username: "East Coast", score: "492k" },
  { rank: 8, username: "Hougang", score: "483k" },
  { rank: 9, username: "Yishun", score: "477k" },
  { rank: 10, username: "Hillview", score: "572k" },
];


interface LeaderboardTableProps {
  selectedKey: string;
}

export const LeaderboardTable: FC<LeaderboardTableProps> = ({selectedKey}) => {
  return (
    <div
      style={{
        margin: "10px",
        backgroundColor: "#b8e0e0",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingTop: "20px",
        paddingBottom: "20px",
        gap: "60px",
        borderRadius: "2%",
      }}
    >
      <div
        style={{
          alignContent: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px",
        }}
      >
        {(selectedKey === "estate"? top3EstateLeaderBoardData : top3FriendsLeaderBoardData).map((item) => (
          <div
            style={{
              height: "88px",
              width: "88px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            key={item.rank}
          >
            {item.rank === 1 && (
              <div style={{ marginBottom: "-25px", zIndex: 999 }}>
                <img src="/crown.png" width="50" height="50" alt="" />
              </div>
            )}
            <div
              style={{
                borderRadius: "50%",
                border: "4px solid #72e0e0",
                marginTop: item.rank === 1 ? "0px" : "90px",
              }}
            >
              <Avatar
                size={item.rank === 1 ? 70 : 50}
                style={{ backgroundColor: "#c1e3e3" }}
                icon={<UserOutlined />}
              />
            </div>
            <div
              style={{
                marginTop: "-10px",
                backgroundColor: "#4bd6d6",
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 999,
                color: "#ffffff",
                fontWeight: "700",
              }}
            >
              {item.rank}
            </div>
            <div style={{ fontWeight: "900" }}>{item.username}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "3px",
                fontWeight: "900",
              }}
            >
              {item.score}
              <Leaf />
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        {(selectedKey === "estate"? dummyEstateLeaderboardData : dummyFriendsLeaderboardData).map((item) => (
          <div
            style={{
              backgroundColor: item.rank === 7 ? "#57d4d4" : "#7fb9ba",
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              width: "90%",
              marginBottom: "10px",
              color: "#ffffff",
              fontWeight: 600,
              borderRadius: "10px",
              alignItems: "center",
            }}
            key={item.rank}
          >
            <div
              style={{
                padding: "8px",
                paddingLeft: "20px",
                paddingRight: "8%",
                textAlign: "center",
              }}
            >
              {item.rank}
            </div>
            <div style={{ padding: "8px" }}>
              <Avatar
                style={{ backgroundColor: "#c1e3e3" }}
                icon={<UserOutlined />}
              />
            </div>
            <div
              style={{
                padding: "8px",
                paddingRight: "42%",
                textAlign: "center",
              }}
            >
              {item.username}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
                textAlign: "center",
                right: "15%",
                position: "absolute",
              }}
            >
              {item.score}
              <Leaf />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
