import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'twixtalks_reviews_v1'

const ReviewForm = ({ onAdd }) => {
  const [name, setName] = useState(localStorage.getItem('twixtalks_name') || '')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')

  useEffect(() => {
    // remember name for convenience
    localStorage.setItem('twixtalks_name', name)
  }, [name])

  const submit = e => {
    e.preventDefault()
    if (!name.trim()) return alert('Please enter your name')
    if (!comment.trim()) return alert('Please add a short comment')

    const review = {
      id: Date.now(),
      name: name.trim(),
      rating: Number(rating),
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
    }

    onAdd(review)
    setComment('')
  }

  return (
    <form onSubmit={submit} aria-label="Submit a review" className="space-y-3">
      <div>
        <label htmlFor="rv-name" className="block text-sm font-medium">Name</label>
        <input id="rv-name" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Rating</label>
        <select value={rating} onChange={e => setRating(e.target.value)} className="mt-1 rounded border px-3 py-2">
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} star{n>1?'s':''}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="rv-comment" className="block text-sm font-medium">Comment</label>
        <textarea id="rv-comment" value={comment} onChange={e => setComment(e.target.value)} rows={4} className="mt-1 block w-full rounded border px-3 py-2" />
      </div>

      <div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit review</button>
      </div>
    </form>
  )
}

const ReviewItem = ({ r, onDelete }) => {
  const date = new Date(r.createdAt).toLocaleString()
  return (
    <article className="border rounded p-3 bg-white shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">{r.name}</div>
          <div className="text-xs text-gray-500">{date}</div>
        </div>
        <div className="text-yellow-600 font-bold">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
      </div>
      <p className="mt-2 text-sm text-gray-700">{r.comment}</p>
      <div className="mt-2 text-right">
        <button onClick={() => onDelete(r.id)} className="text-red-500 text-xs">Delete</button>
      </div>
    </article>
  )
}

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setReviews(JSON.parse(raw))
    } catch (e) {
      console.error('Failed to load reviews', e)
      setReviews([])
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
    } catch (e) {
      console.error('Failed to save reviews', e)
    }
  }, [reviews])

  const add = r => setReviews(prev => [r, ...prev])
  const remove = id => setReviews(prev => prev.filter(x => x.id !== id))

  const average = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : null

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Reviews</h1>
      <p className="mb-4 text-sm text-gray-600">Tell us how satisfied you are with TwixTalks — your feedback helps us improve.</p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="font-semibold mb-2">Leave a review</h2>
          <ReviewForm onAdd={add} />
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Average rating</div>
              <div className="text-3xl font-bold">{average ? `${average} / 5` : 'No reviews yet'}</div>
            </div>
            <div className="text-sm text-gray-500">{reviews.length} review{reviews.length!==1?'s':''}</div>
          </div>

          <div className="space-y-3">
            {reviews.length === 0 ? (
              <div className="text-sm text-gray-500">Be the first to leave feedback.</div>
            ) : (
              reviews.map(r => <ReviewItem key={r.id} r={r} onDelete={remove} />)
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Reviews
