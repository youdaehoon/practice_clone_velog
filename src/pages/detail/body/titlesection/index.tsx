import React from 'react'
import PostInfo from './PostInfo'

const TitleSection :React.FC = () => {
    const data=
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
    
  return (
    <section>
    <h1>{data.title}</h1>

    <PostInfo nick={data.user.nick} date={data.date} numLike={data.numLike}></PostInfo>

    </section>
  )
}

export default TitleSection