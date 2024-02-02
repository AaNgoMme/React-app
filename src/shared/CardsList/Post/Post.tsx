import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import { CommentForm } from '../CommentForm';
import { useNavigate } from 'react-router-dom';

interface IPostProps {
  onClose?: () => void
}

export function Post(props: IPostProps) {

  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    }, [])

  useEffect(()=> {
    if(mounted) {
      function hanldClick(event: MouseEvent) {
        if (event.target instanceof Node && !ref.current?.contains(event.target)) {
          
          navigate("/")
        }
      }
      document.addEventListener('click', hanldClick)
  
      return () => document.removeEventListener('click', hanldClick)
    }
    
  })
  const node = document.querySelector('#modal_root')
  if (!node) return null

  return ReactDOM.createPortal( (
    <div className={styles.modal}>
      <div className={styles.content} ref={ref}>
        <h2 className={styles.title}>Все чаще появляется информация о том, что курс на социально-ориентированный национальный проект оправдал надежды граждан</h2>
        <p>Каждый из нас понимает очевидную вещь: современная методология разработки требует определения и уточнения системы обучения кадров, соответствующей насущным потребностям. Как уже неоднократно упомянуто, действия представителей оппозиции разоблачены.</p>
        <p>Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке объединены в целые кластеры себе подобных. Не следует, однако, забывать, что начало повседневной работы по формированию позиции играет определяющее значение для системы обучения кадров, соответствующей насущным потребностям.</p>
        <p>Противоположная точка зрения подразумевает, что сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть функционально разнесены на независимые элементы. Безусловно, высокое качество позиционных исследований в значительной степени обусловливает важность модели развития.</p>
        <button className={styles.btnClose} onClick={() => navigate("/")}>+</button>
        <CommentForm />
      </div>
    </div>
  ), node );
}
