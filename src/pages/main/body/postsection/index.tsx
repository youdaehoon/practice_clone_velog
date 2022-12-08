import React from "react";
import Card from "../../../../components/ui/Card";
import PostCard from "./PostCard";

import "./index.css";
import "../../../../styles/common.css";
import Test from "../../../../components/Test";


const PostSection : React.FC = () => {
  const datas=[
    { 
      url:'https://velog.velcdn.com/images/ninto_2/post/e4eaa7ec-223f-4ada-be19-11dadf1d8d0f/image.gif',
      title:"✍커밋 컨벤션",
      content:`"커밋 메세지 쓸 때도 컨벤션이 존재했다고..?😨"`,
      date:"2012년 11월 27일",
      numReply:4,
      user:{
          profile:"https://velog.velcdn.com/images/ninto_2/profile/803bef73-6b7d-4af8-8592-ee361c8b9e61/image.jpg",
          nick:"ninto_2"
  },
  numLike:125 
  
  }
    ,
    {
      url: "https://velog.velcdn.com/images/wksmstkfka12/post/9208c4ad-3d6c-44e2-8a3b-9f42ce3b031d/image.png",
      title: "개발을 좋아한다는 것",
      content: `나는 개발을 좋아하지 않는가? 라는 생각을 많이 했었다`,
      date: "2012년 11월 26일",
      numReply: 14,
      user: {
        profile:
          "https://velog.velcdn.com/images/wksmstkfka12/profile/907742d2-6733-4f4d-b090-8aba1f6fcddd/image.jpeg",
        nick: "wksmstkfka12",
      },
      numLike: 75,
    },
    {
      url: "https://velog.velcdn.com/images/tosspayments/post/4acc863d-b29d-43a7-b179-4e76e34a91a4/image.png",
      title: "토스페이먼트 기술 블로그에 오신 것...",
      content: `토스페이먼츠는 PG를 연동하는 개발자 경험을 수호하는 활동의 일환으로 기술 블로그를 시작하려고 해요. 좀 더 쉽고 재밌는 컨텐츠...`,
      date: "7일 전",
      numReply: 2,
      user: {
        profile:
          "https://velog.velcdn.com/images/tosspayments/profile/b8fbda89-6591-41ea-b280-582674fcff7a/image.jpg",
        nick: "tosspayments",
      },
      numLike: 37,
    },
    {
      url: "https://velog.velcdn.com/images/jellabie/post/5a8cb037-ce7c-4e3b-8b4d-ac51bfaddf99/image.png",
      title: "개발 공감 짤 모음",
      content: `웹 개발자가 테스트해야 할 기기들을 설명하고 있다. 노트북, 태플릿, 모바일 등 단순 기기에서부터 해서 윈도우, ios 등 환경까지 모...`,
      date: "2022년 11월 28일",
      numReply: 2,
      user: {
        profile:
          "https://velog.velcdn.com/images/jellabie/profile/b2441c61-320a-4373-9337-ec7134a13e90/image.jpg",
        nick: "jellabie",
      },
      numLike: 22,
    },
  ];

  return (
    <div className="wrap flex flex-row ">
      {datas.map((data, idx) => (
        <div className="margin1 wrapcard" key={"post/" + idx}>
          <PostCard data={data} />
        </div>
      ))}
      <Test />
    </div>
  );
};

export default PostSection;
