import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Clients from '../components/Clients';
import Services from './Services';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/apis/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 mx-auto mb-12 max-w-7xl '>
        <Hero />
      </div>
      <div className='mx-auto max-w-7xl'>
        <HomeAbout />

      </div>
      <div>
        <Services />
        <Clients />
        
      </div>
      <div className='justify-center max-w-4xl p-3 mx-auto h-96'>
        Projects will be here!
      </div>
      <div className='max-w-4xl p-3 mx-auto mb-10 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
    </div>
  );
}
