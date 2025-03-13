import React, { useState } from "react";
import styles from "../components/Task.module.css";
import { Check, Trash } from "phosphor-react";

export function Task({ id, content, onDeleteTask, onCompleteTask }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function toggleTaskCompletion() {
    setIsChecked((prevState) => !prevState);
    onCompleteTask(id, !isChecked); // Passa o estado atualizado para o contador
  }

  return (
    <div className={styles.task}>
      <div className={styles.container}>
        <div className={styles.label}>
          {/* Checkbox invisível para controle */}
          <input
            type="checkbox"
            className={styles.hiddenCheckbox}
            checked={isChecked}
            onChange={toggleTaskCompletion}
          />

          {/* Checkbox estilizado */}
          <span
            className={`${styles.checkbox} ${isChecked ? styles["checkbox-checked"] : styles["checkbox-unchecked"]}`}
            onClick={toggleTaskCompletion} // Agora o clique no círculo do checkbox funciona!
          >
            {isChecked && <Check size={12} color="#fff" />}
          </span>

          {/* Texto da tarefa */}
          <p
            className={`${styles.paragraph} ${isChecked ? styles["paragraph-checked"] : ""}`}
            onClick={toggleTaskCompletion}
          >
            {content}
          </p>
        </div>

        <button onClick={handleDeleteTask} className={styles.trashButton}>
          <Trash size={20} color="#808080" />
        </button>
      </div>
    </div>
  );
}
