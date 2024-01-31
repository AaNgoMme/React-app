import React, { ChangeEvent, FormEvent, useContext, useState} from 'react';
import styles from './commentform.css';
import { useSelector, useDispatch } from 'react-redux'
import { RootState, updateComment } from '../../../store/store';
import classNames from 'classnames';

export function CommentForm() {

  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch()
/*   const { value, onChange} = useContext(commentContext) */

  const [inputTouched, setInputTouched] = useState(false)
  const [inputError, setInputError] = useState('')


  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    /* onChange(event.target.value) */
    dispatch(updateComment(event.target.value))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(value)

    setInputTouched(true)
    const isFormValid = !validateValue()
    if (!isFormValid) return
    alert('Отправленно')
  }

  function validateValue() {
    if (value.length <= 3) return 'Введите больше 3-х символов'
    return ''
  }

  function handleBlur(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.style.border = '2px solid red'
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
       className={inputTouched && validateValue() ? styles.inputError : styles.input}
       value={value} 
       onChange={handleChange} 
       placeholder='Оставте ваш комментарий' 
      />
      {inputTouched && validateValue() && (<div className={styles.validateError}>{validateValue()}</div>)}
      <button type='submit' className={styles.button} >Коментировать</button>
    </form>
  );
}
 