import React from "react";
import { useState } from "react";
import styles from "../components/Input.module.css";
import { PlusCircle } from "phosphor-react";
import { Empty } from "./Empty";
import { Task } from "./Task";

export function Input() {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0);
  const [numTask, setNumTask] = useState(0);
  function handleNumTask() {
    setNumTask(numTask + 1);
  }

  function handleCreateNewTask() {
    event.preventDefault();

    const newTaskText = event.target.tarefas.value;
    if (!newTaskText.trim()) return;
    const newTask = {
      id: Date.now(), // ou você pode usar uma biblioteca como uuid para gerar IDs únicos
      text: newTaskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    handleNumTask();

    setNewTaskText("");
  }

  function handleNewTaskChange() {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskId) {
    const taskToDelete = tasks.find((task) => task.id === taskId);

    if (taskToDelete) {
      // Se a tarefa deletada estava concluída, reduz o contador de concluídas
      if (taskToDelete?.isCompleted) {
        setCompletedTasks((prev) => Math.max(prev - 1, 0));
      }
    }

    setTasks(tasks.filter((task) => task.id !== taskId));
    setNumTask((prev) => Math.max(prev - 1, 0));
  }

  function handleCompletedTask(isCompleted) {
    setCompletedTasks((prev) => (isCompleted ? prev + 1 : prev - 1));
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.inputContainer}>
        <textarea
          className={styles.input}
          name="tarefas"
          value={newTaskText}
          onChange={handleNewTaskChange}
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.button}>
          Criar <PlusCircle size={24} />
        </button>
      </form>

      <div className={styles.listTaskContainer}>
        <div className={styles.taskList}>
          <aside>
            <p>Tarefas criadas</p>
            <span>{numTask}</span>
          </aside>
          <aside>
            <p>Tarefas concluídas</p>
            <span>
              {completedTasks} de {numTask}
            </span>
          </aside>
        </div>

        <div className={styles.taskContainer}>
          {tasks.length === 0 ? (
            <Empty />
          ) : (
            tasks.map((tarefas) => (
              <Task
                key={tarefas.id}
                id={tarefas.id}
                completed={tarefas.completed}
                content={tarefas.text}
                onDeleteTask={deleteTask}
                onCompleteTask={handleCompletedTask}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
