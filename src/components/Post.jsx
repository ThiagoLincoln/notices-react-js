import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.css"
import { useState } from "react"


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    "post muito bacana, hein!"
  ])

  const [newCommentText, SetNewCommentText] = useState("")

  const publisedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    SetNewCommentText("")
  }

  function handleNewCommentChange() {
    SetNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="06 de abril às 00:13" dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a target="blanck_" href="https://github.com/ThiagoLincoln">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feefback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentlist}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />)
        })}
      </div>
    </article>
  )
}