import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const tareas:Object = {
    tarea: "Mi primer tarea",
    /* date: "today", [Se agrega una fecha automaticamente en notion] */
    status: "Sin Iniciar",
    proyecto: "Proyecto de prueba 1"
  }
  const clicHandler = (e:any) =>  {
    publicar(tareas);
}
  async function publicar(task: Object){
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  } 

  return (
    <div className={styles.container}>      
      <h1> Notion publish App </h1>
      <button onClick={clicHandler}>Publicar</button>
    </div>
  );
};

export default Home;
