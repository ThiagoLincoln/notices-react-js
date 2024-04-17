import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    console.log("deletou")

    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/souzazxc.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Lincoln</strong>
              <time title="06 de abril às 00:13" dateTime="2024-06--04 00:13:22">Cerca de 1hr atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentario'>
              <Trash size={23} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}