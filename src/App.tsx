import './App.css'
import Header from './components/header'
import NoteForm from './components/NoteForm'
import Notes from './components/Notes'
import type { Note } from './types/note'

const defaultNotes: Note[] = [
  {
      id: "1",
      title: "Note 1",
      content: "Content 1"
  },
  {
      id: "2",
      title: "Note 2",
      content: "Content 2"
  },
  {
      id: "3",
      title: "Note 3",
      content: "Content 3"
  }
]

function App() {

  return (
    <>
    <Header/>
    <Notes notes={defaultNotes} />
    <NoteForm />
    </>
  )
}

export default App
