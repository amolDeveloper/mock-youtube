import React from 'react';
import { commentsData } from '../utils/comments';

const Comment = ({data}) => {
    const {name, comment} = data;
    return (
    <div className='flex border-gray-100 rounded-lg bg-gray-100 my-2'>
        <div>
            <img className='w-10 m-2' alt='user' src='https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0' />
        </div>
        <div>
            <p className='font-bold'>{name}</p>
            <p>{comment}</p>
        </div>
    </div>
    )
}

const CommentsList = ({comments}) => {
    return (
        comments?.map((comment) => (
            <div key={comment.id}>
                <Comment data={comment} />
                <div className='mx-5 px-5 border-l-2 border-gray-600'>
                    <CommentsList comments={comment.replies} />
                </div>
            </div>
        ))
    )
}

const CommentsContainer = () => {
  return (
    <div className='m-2'>
        <h1 className='text-xl font-bold'> Comments </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
