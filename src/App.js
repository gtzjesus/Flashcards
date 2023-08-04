import { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2,
    question: 'What language is React based on?',
    answer: 'Javascript',
  },
  {
    id: 3,
    question: 'Whats the name of the syntax to describe a UI in React?',
    answer: 'JSX',
  },
  {
    id: 4,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 5,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 6,
    question: 'How long to master React?',
    answer: 'few months',
  },
];

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return questions.map((question) => (
    <div
      key={question.id}
      onClick={() => handleClick(question.id)}
      className={question.id === selectedId ? 'selected' : ''}
    >
      <p>{question.id === selectedId ? question.answer : question.question}</p>
    </div>
  ));
}
