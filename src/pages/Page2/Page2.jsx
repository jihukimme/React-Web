import React from "react";
import MyCard from "../../components/MyCard/MyCard";
import "./Page2.scss";

import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

export default function Page2() {
  // Expanded dummy data without the id field
  const projectData = [
    {
      title: "프로젝트 Alpha",
      content1: "홍길동",
      content2: "2024-01-01 ~ 2024-06-30",
    },
    {
      title: "프로젝트 Beta",
      content1: "김철수",
      content2: "2024-03-01 ~ 2024-09-30",
    },
    {
      title: "프로젝트 Gamma",
      content1: "이영희",
      content2: "2024-05-01 ~ 2024-12-31",
    },
    {
      title: "프로젝트 Delta",
      content1: "박민수",
      content2: "2024-02-15 ~ 2024-08-15",
    },
    {
      title: "프로젝트 Epsilon",
      content1: "최수정",
      content2: "2024-04-01 ~ 2024-10-01",
    },
    {
      title: "프로젝트 Zeta",
      content1: "정하늘",
      content2: "2024-07-01 ~ 2024-12-31",
    },
    {
      title: "프로젝트 Eta",
      content1: "한예림",
      content2: "2024-06-01 ~ 2024-11-30",
    },
    {
      title: "프로젝트 Theta",
      content1: "윤준호",
      content2: "2024-08-01 ~ 2025-01-31",
    },
    {
      title: "프로젝트 Iota",
      content1: "박서준",
      content2: "2024-09-01 ~ 2025-02-28",
    },
    {
      title: "프로젝트 Kappa",
      content1: "김나영",
      content2: "2024-10-01 ~ 2025-03-31",
    },
    {
      title: "프로젝트 Lambda",
      content1: "이도훈",
      content2: "2024-11-01 ~ 2025-04-30",
    },
    {
      title: "프로젝트 Mu",
      content1: "신유리",
      content2: "2024-12-01 ~ 2025-05-31",
    },
    {
      title: "프로젝트 Nu",
      content1: "오정환",
      content2: "2025-01-01 ~ 2025-06-30",
    },
    {
      title: "프로젝트 Xi",
      content1: "조민호",
      content2: "2025-02-01 ~ 2025-07-31",
    },
    {
      title: "프로젝트 Omicron",
      content1: "황지민",
      content2: "2025-03-01 ~ 2025-08-31",
    },
    {
      title: "프로젝트 Pi",
      content1: "정예린",
      content2: "2025-04-01 ~ 2025-09-30",
    },
    {
      title: "프로젝트 Rho",
      content1: "박진수",
      content2: "2025-05-01 ~ 2025-10-31",
    },
    {
      title: "프로젝트 Sigma",
      content1: "김민재",
      content2: "2025-06-01 ~ 2025-11-30",
    },
    {
      title: "프로젝트 Tau",
      content1: "이수정",
      content2: "2025-07-01 ~ 2025-12-31",
    },
  ];

  return (
    <div className="page2">
      {/* Render MyCard components with the expanded dummy data */}
      {projectData.map((project, index) => (
        <MyCard
          key={index} // Using the index as the key
          title={project.title}
          content1={project.content1}
          content2={project.content2}
        />
      ))}
      <FloatButton
        type="primary"
        style={{ width: "55px", height: "55px" }} // width와 height로 크기 조정
        icon={<PlusOutlined />}
        tooltip={<div>프로젝트를 추가하세요.</div>}
        onClick={() => {
          console.log("Float button clicked");
        }}
      />
    </div>
  );
}
