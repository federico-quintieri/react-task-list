// Array di partenza
const tasks = [
  {
    id: 1,
    title: "Implementare la homepage",
    priority: 1,
    estimatedTime: 120,
    state: "completed",
  },
  {
    id: 2,
    title: "Sviluppare il menu di navigazione",
    priority: 2,
    estimatedTime: 60,
    state: "completed",
  },
  {
    id: 3,
    title: "Creare il footer del sito",
    priority: 3,
    estimatedTime: 30,
    state: "completed",
  },
  {
    id: 4,
    title: "Ottimizzare le performance",
    priority: 1,
    estimatedTime: 180,
    state: "completed",
  },
  {
    id: 5,
    title: "Scrivere test per i componenti",
    priority: 2,
    estimatedTime: 90,
    state: "completed",
  },
  {
    id: 6,
    title: "Implementare la pagina dei contatti",
    priority: 3,
    estimatedTime: 60,
    state: "completed",
  },
  {
    id: 7,
    title: "Aggiungere animazioni CSS",
    priority: 2,
    estimatedTime: 30,
    state: "backlog",
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: "in_progress",
  },
  {
    id: 9,
    title: "Aggiornare la documentazione",
    priority: 3,
    estimatedTime: 60,
    state: "backlog",
  },
  {
    id: 10,
    title: "Rifattorizzare il codice CSS",
    priority: 2,
    estimatedTime: 90,
    state: "in_progress",
  },
];

// Separare in due array questo principale
// Un array contiene oggetti con state uguale completed
// Altro array contiene oggetti con state diverso da completed

function App() {
  // Faccio array che contiene oggetti con state uguale a completed
  const arrayCompleted = tasks.filter(
    (currElement) => currElement.state === "completed"
  );

  // Faccio array che contiene oggetti con state diverso da completed
  const arrayNotCompleted = tasks.filter(
    (currElement) => currElement.state != "completed"
  );

  // Ora creo array JSX di liste per arrayCompletati
  const arrayCompletedJSX = arrayCompleted.map((currElement, currIndex) => (
    <li key={currIndex}>
      <h3>
        {currElement.title}{" "}
        <span className="spanStatus">{currElement.state}</span>
      </h3>
      <p>Priority: {currElement.priority}</p>
      <p>Est. time: {currElement.estimatedTime}</p>
    </li>
  ));

  // Ora creo array JSX di liste per arrayNonCompletati
  const arrayNotCompletedJSX = arrayNotCompleted.map(
    (currElement, currIndex) => (
      <li key={currIndex}>
        <h3>
          {currElement.title}{" "}
          <span className="spanStatus">{currElement.state}</span>
        </h3>
        <p>Priority: {currElement.priority}</p>
        <p>Est. time: {currElement.estimatedTime}</p>
      </li>
    )
  );

  return (
    <>
      <h1>Task Manager</h1>
      <h2>Current Tasks {arrayNotCompletedJSX.length}</h2>
      {arrayNotCompletedJSX}
      <h2>Completed Tasks {arrayCompletedJSX.length}</h2>
      {arrayCompletedJSX}
    </>
  );
}

export default App;