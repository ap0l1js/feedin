import { posts } from '../../data';
import { Post } from '../post';
import { Sidebar } from '../sidebar';
import styles from './styles.module.css';

export const Body = () => (
  <div className={styles.wrapper}>
    <Sidebar />
    <main>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        );
      })}
    </main>
  </div>
);
