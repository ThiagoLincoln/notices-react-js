import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css"
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://Github.com/souzazxc.png",
      name: "Thiago Lincoln",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa " },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "Github" },
    ],
    publishedAt: new Date("2024-04-06 12:00:00")
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://Github.com/maykbrito.png",
      name: "Mayk Brito",
      Role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa " },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "Github" },
    ],
    publishedAt: new Date("2024-04-05 15:00:00")
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
