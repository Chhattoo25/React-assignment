import React from 'react'
import styles from './Form.module.css'

const Form = (props) => {
const{onSubmit,children,title}=props;
  return (
  <form className={styles.myForm} onSubmit={onSubmit}>
    <h3>{title}</h3>
    {children}
    <div>
      <input type='submit'value ="submit"/>
    </div>

                       
  </form>
  )
}

export {Form}