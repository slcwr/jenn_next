// components/PostForm.tsx
import { useState } from 'react'
import { supabase } from '../utils/supabase'

export default function PostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { data, error } = await supabase
      .from('posts')
      .insert({ title, content })

    if (error) {
      console.error('Error inserting post:', error)
    } else {
      console.log('Post inserted successfully:', data)
      setTitle('')
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Submit Post</button>
    </form>
  )
}