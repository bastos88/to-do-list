import React from "react";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wrapper}>
        <Input />
      </div>
    </div>
  );
}

export default App;
