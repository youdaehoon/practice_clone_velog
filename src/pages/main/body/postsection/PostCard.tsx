import React from 'react'
import ProfileImage from '../../../../components/ProfileImage'
import Card from '../../../../components/ui/Card'
import MyImage from '../../../../components/ui/MyImage'

interface Iprops{

}
const PostCard:React.FC<Iprops> = () => {
    const data={
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
    <Card width={320} height={377.013} borderRadius={4}>
        <>
        <MyImage url={data.url} height={167.012}></MyImage>
        <div>
        <h4>{data.title}</h4>
        <p>{data.content}</p>
        <div><span>{data.date}</span> <span>{data.numReply}</span>개의 댓글</div>
        </div>
        <div>
            <ProfileImage url={data.user.profile} width={24} height={24}/> {data.user.nick} {data.numLike}</div>
        </>
        
    </Card>
  )
}

export default PostCard