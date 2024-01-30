import React, { ChangeEvent, FormEvent, useContext, useState} from 'react';
import styles from './commentform.css';
import { useSelector, useDispatch } from 'react-redux'
import { RootState, updateComment } from '../../../store/store';

export function CommentForm() {

  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch()

/*   const { value, onChange} = useContext(commentContext) */

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    /* onChange(event.target.value) */
    dispatch(updateComment(event.target.value))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} placeholder='Оставте ваш комментарий' />
      <button type='submit' className={styles.button}>Коментировать</button>
    </form>
  );
}
 