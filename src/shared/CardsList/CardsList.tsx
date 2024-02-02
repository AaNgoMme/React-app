import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function CardsList() {
  const token = useSelector<RootState>(state => state.token)
  const [posts, setPosts] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')
  const [nextAfter, setNextAfter] = useState('')


  const bottomOfList = useRef<HTMLDivElement>(null)

  useEffect(() => {

    if (!token) return

    async function load() {
      setLoading(true)
      setErrorLoading('')

      try {
        const response = await axios.get('https://oauth.reddit.com/rising/', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 4,
            after: nextAfter,
          }
        })

        setNextAfter(response.data.data.after)
        setPosts((prevChildren: any[]) => prevChildren.concat(...response.data.data.children))
        console.log(response.data.data.children[0].data.url)
      } catch (error) {
        setErrorLoading(String(error))
      }
      setLoading(false)
    }
    

    const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      load()
      console.log('load')
    }
    }, {
      rootMargin: '10px'
    })

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
  
    }
  }, [bottomOfList.current, nextAfter, token])

  return (
    <ul className={styles.cardsList}>
      {posts.map((post: { data: { id: React.Key | null | undefined; title: string; author: string; url: string }; }) => (
        <Card 
          key={post.data.id}
          title={post.data.title}
          author={post.data.author}
          url={post.data.url}
        />
      ))}

      <div ref={bottomOfList} />

      {loading && (
        <div style={{ textAlign: 'center'}}>Загрузка.....</div>
      )}
      {errorLoading && (
        <div style={{ textAlign: 'center'}}>{errorLoading}</div>
      )}
    </ul>
  );
}
