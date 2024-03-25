import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://mspost.com.br/wp-content/uploads/2023/12/o-mundo-depois-de-nos-e-o-filme-mais-assistido-da-netflix-02.jpg">
       <h3>
       O Mundo Depois de Nós
        </h3> 
      <p>
      deixe sua comentário
        </p>
      </Post>
    </div>
  );
}

export default App;
