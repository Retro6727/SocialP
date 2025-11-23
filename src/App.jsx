import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Pricing from './pages/Pricing.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
import ForgotPassword from './components/ForgotPassword.jsx'
import Groups from './pages/Groups.jsx'
import Trending from './pages/Trending.jsx'
import Updates from './pages/Updates.jsx'
import Contacts from './pages/Contacts.jsx'
import Chatbot from './components/Chatbot.jsx'
import Messages from './pages/Messages.jsx'
import Reviews from './pages/Reviews.jsx'
import FloatingMessageIcon from './components/FloatingMessageIcon.jsx'

const sliderImages = [
  "https://i.pinimg.com/1200x/28/3f/0c/283f0c58d7774ed823d8772c8d8f57a1.jpg",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
];

const Home = () => {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div style={{ position: "relative", width: "100%", maxHeight: "750px", marginBottom: "16px" }}>
        <img
          src={sliderImages[current]}
          alt={`Slide ${current + 1}`}
          style={{ width: "100%", maxHeight: "750px", objectFit: "cover", borderRadius: "12px", transition: "opacity 0.5s", animation: "fadeIn right" }}
        />
        <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {sliderImages.map((_, idx) => (
            <span key={idx} style={{ width: 12, height: 12, borderRadius: "50%", background: idx === current ? "#3b82f6" : "#fff", border: "1px solid #3b82f6", display: "inline-block", cursor: "pointer" }} onClick={() => setCurrent(idx)} />
          ))}
        </div>
      </div>
      <main className="max-w-10xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Welcome to TwixTalks</h2>
        <p className="mb-4">This is a platform where you can connect with others through tweets, join groups, and stay updated with the latest trends.</p>
        <p className="mb-4">Explore the features and start engaging with the community!</p>
      </main>
      <section className="bg-yellow-200 p-4 rounded-lg max-w-2xl mx-auto mt-8">
        <h3 className="text-2xl font-semibold mb-2">Trending Topics</h3>
        <p>Check out the trending topics and join the conversation!</p>
        <a href={'/trending'}>Explore</a>
      </section>
      <section className="bg-red-300 p-4 rounded-lg max-w-2xl mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-2">Groups</h3>
        <p>Join groups that interest you and connect with like  minded individuals!</p>
        <a href={'/Groups'}>Browse Groups</a>
      </section>
      <section className="bg-blue-500 p-4 rounded-lg max-w-2xl mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-2">Updates</h3>
        <p>We are constantly working on improving the platform. Stay tuned for more updates!</p>
        <a href={'/Updates'}>Learn More</a>
      </section>
      <section className="bg-green-400 p-4 rounded-lg max-w-2xl mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>
        <a href={'/contacts'}>Get in Touch</a>
      </section>
    </>
  );
}

const App = () => {
  return (
    <div style={{ margin: "4px", position: "relative", display: 'flex', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/updates' element={<Updates />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
      <Chatbot />
      <FloatingMessageIcon />
    </div>
  );
}

export default App;
