"use client";

import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  // Crée un état "todos" qui stockera les tâches sous forme d'un tableau
  const [inputValue, setInputValue] = useState("");
  // Crée un état "inputValue" pour gérer la valeur du champ de texte

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Met à jour l'état "inputValue" avec la valeur saisie dans le champ de texte
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      // Vérifie si la valeur saisie n'est pas vide après avoir retiré les espaces inutiles
      setTodos([...todos, inputValue.trim()]);
      // Ajoute la tâche saisie à la liste des tâches
      setInputValue("");
      // Réinitialise la valeur du champ de texte après avoir ajouté la tâche
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    // Crée une copie du tableau de tâches pour éviter la modification directe de l'état
    updatedTodos.splice(index, 1);
    // Supprime la tâche à l'index spécifié du tableau de tâches
    setTodos(updatedTodos);
    // Met à jour l'état "todos" avec la nouvelle liste de tâches sans la tâche supprimée
  };

  return (
    <div className="flex flex-col w-[22.0625rem] gap-4 m-auto mt-4">
      <h1 className="text-2xl font-bold">Mini ToDo App</h1>
      <div className="inline-flex gap-3 justify-between">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} // Associe la fonction handleInputChange à l'événement onChange du champ de texte
          placeholder="Enter your task" // Affiche un texte de rappel dans le champ de texte
          className="p-2"
        />
        {/* Associe la fonction addTodo à l'événement onClick du bouton "Add" */}
        <button
          onClick={addTodo}
          className="p-2 border border-slate-500 rounded-lg"
        >
          Add
        </button>
      </div>
      <ul className="gap-1 flex flex-col">
        {todos.map((todo, index) => (
          // Utilise la méthode map pour afficher chaque tâche dans une liste non ordonnée (ul)
          <li
            className="inline-flex gap-3 w-full justify-between items-center"
            key={index}
          >
            {todo}
            {/* Affiche le contenu de chaque tâche */}
            <button
              onClick={() => removeTodo(index)}
              className="p-2 border border-slate-500 rounded-lg"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
