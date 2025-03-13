import React from "react";
import styles from "../components/Empty.module.css";
import clipBoard from "../assets/clipboard.svg";
export function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipBoard} alt="clipboard" />
      <div className={styles.emptyclip}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
