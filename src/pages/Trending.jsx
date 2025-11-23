import React, { useEffect, useState } from 'react'

const NewsCards = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY

    const sampleFallback = [
      {
        title: "Business: Markets update (fallback)",
        description: "Fallback business headline — set VITE_NEWS_API_KEY to get live data.",
        url: 'https://newsapi.org/s/india-business-news-api',
        urlToImage: 'https://i.pinimg.com/736x/d8/da/50/d8da5090ae5238f728aad5c20f76daee.jpg'
      },
    ]

    const fetchNews = async () => {
      if (!apiKey) {
        // No API key — use fallback sample data
        setArticles(sampleFallback)
        setLoading(false)
        return
      }

      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=business&country=us&pageSize=12&apiKey=${apiKey}`
        )
        const data = await res.json()
        if (data && data.articles && data.articles.length) setArticles(data.articles)
        else setArticles(sampleFallback)
      } catch (e) {
        console.error('news fetch failed', e)
        setArticles(sampleFallback)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) return <div className='text-center py-8'>Loading business news...</div>
  if (!articles.length) return <div className='text-center py-8'>No business news available.</div>

  return (
    <div className='flex flex-row flex-wrap gap-6 justify-start'>
      {articles.map((a, i) => {
        const img = a.urlToImage || a.image || a.img || 'https://via.placeholder.com/400x240?text=No+Image'
        const title = a.title || a.newsTitle || 'Untitled'
        const desc = a.description || a.info || ''
        const link = a.url || a.href || '#'

        return (
          <article key={link + i} className='flex flex-col bg-gray-100 p-4 rounded-lg shadow w-72 transform transition-all hover:scale-[1.02] animate-fade-in-right' style={{ minHeight: 220 }}>
            <img src={img} alt={title} className='rounded mb-3 w-full h-40 object-cover' />
            <h3 className='font-semibold text-sm mb-1'>{title}</h3>
            <p className='text-xs text-gray-600 mb-3 line-clamp-3'>{desc}</p>
            <a href={link} target='_blank' rel='noreferrer' className='mt-auto text-blue-500 underline'>Read</a>
          </article>
        )
      })}
    </div>
  )
}

const Trending = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-start mt-4 mb-2'>Trending Topics</h1>
      <p className='text-left mb-4'>Stay updated with the latest trends and discussions happening on TwixTalks.</p>
      <div className='max-w-5xl mx-auto mt-8 bg-white p-8 rounded-lg shadow flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold mb-4'>Business Trends</h2>
        <NewsCards />

        <h2 className='text-2xl font-semibold mt-6 mb-4'>Join the Trends</h2>
        <form>
          <div className='relative mb-4'>
            <input type='text' id='topic' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder='Enter your email' />
            <label htmlFor='topic' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Email</label>
            <span className='text-red-500 text-sm hidden peer-invalid:block'>Please enter a valid email.</span>
          </div>
        </form>
        <button type='submit' className='bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white p-2 w-full mt-2 rounded-lg shadow transition'>Subscribe</button>
        <p className='text-center text-sm mt-4'>Want to see more trends? <a href='/more-trends' className='text-blue-500'>Click here</a></p>
        <p className='text-center text-sm'>If you have any suggestions, please <a href='/contact' className='text-blue-500'>contact us</a>.</p>
      </div>
    </div>
  )
}

export default Trending