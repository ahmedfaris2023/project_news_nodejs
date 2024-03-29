import React from 'react'
import CommentForm from './CommentForm'
const CommentsContainer = ({className}) => {
  const addCommentHandler=(value,parent=null,replyOnUser=null)=>{};
  return (
    <div className={`${className}`}>
        <CommentForm btnLabel='Sent'/>
    </div>
  )
}

export default CommentsContainer