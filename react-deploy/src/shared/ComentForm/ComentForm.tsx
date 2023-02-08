import { Formik, useFormik } from 'formik';
import React, { ChangeEvent, FormEvent, forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { RootState, updateComment } from '../../store';
import styles from './comentform.css';
import { IconComments } from './IconComments';

interface IPost {
  onClose?: () => void;
  author: string;
}

function ComentForms(props: IPost, ref:any) {
  const valueInitial = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch();
  const ref1 = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));


  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref1.current?.contains(event.target)) {
        props.onClose?.();
      }
    }
  
    document.addEventListener('click', handleClick)
  
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
  const [value1, setValue ] = useState('');
  // const [touched, setToched] = useState(false);
  // const [valueError, setValueError] = useState('');

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   setToched(true);
  //   setValueError(validateValue());

  //   const isFormValid = !validateValue();
  //   if (!isFormValid) return;

  //   alert('Форма отправлена');
  // }

  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(event.target.value);
  // }


  // function validateValue() {
  //   if (value.length <= 3) return "Введите больше символов";
  //   return '';
  // }

  // <div className={styles.comentForm} ref={ref1}>
  // //     <form className={styles.form} onSubmit={handleSubmit}>
  // //       <textarea className={styles.input} ref={inputRef} value={valueInitial} onChange={handleChange}></textarea>
  // //       <div className={styles.blockIconsButton}>
  // //         <div className={styles.componentIconComments}>
  // //           <IconComments ></IconComments>
  // //         </div>
  // //         <button type='submit' className={styles.button}>Комментировать</button> 
  // //       </div>  
  // //     </form>
  // //     </div>

  const validate = (values: { value: any; }) => {
    const errors = {
      value: '',
    };
    if (values.value.length <= 3) {
      errors.value = "Введите больше символов";
      return errors;
    }
  };

  const formik = useFormik({
    initialValues: { 
      value: '', 
     },
    validate,
    onSubmit: values => {
      setValue(values.value);
    },
  });


  return (
    <div className={styles.comentForm} ref={ref1}>
    <form className={styles.form} onSubmit={formik.handleSubmit}>
    <textarea
      name='value'
      className={styles.input} 
      value={formik.values.value} 
      onChange={formik.handleChange} 
      
      aria-invalid={formik.errors.value ? 'true' : undefined}>
    </textarea>
    {formik.touched.value && formik.errors.value && (<div>{formik.errors.value}</div>)}
      <button type='submit' className={styles.button}>Комментировать</button> 
  
  </form> 
  </div>
  );
}

export const ComentForm = forwardRef(ComentForms);

{/* <form className={styles.form} onSubmit={handleSubmit}>
      <textarea 
        className={styles.input} 
        value={value} 
        onChange={handleChange} 
        aria-invalid={valueError ? 'true' : undefined}>
      </textarea>
      {touched && valueError && (<div>{valueError}</div>)}
        <button type='submit' className={styles.button}>Комментировать</button> 
    
    </form> */}

// function ComentForms(props: IPost, ref:any) {
//   const valueInitial = useSelector<RootState, string>(state => state.commentText)
//   const dispatch = useDispatch();
//   const ref1 = useRef<HTMLDivElement>(null);

//   const inputRef = useRef<HTMLTextAreaElement>(null);

//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       inputRef.current?.focus();
//     }
//   }));


//   useEffect(() => {
//     function handleClick(event: MouseEvent) {
//       if (event.target instanceof Node && !ref1.current?.contains(event.target)) {
//         props.onClose?.();
//       }
//     }
  
//     document.addEventListener('click', handleClick)
  
//     return () => {
//       document.removeEventListener('click', handleClick)
//     }
//   }, [])

//   function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
//     dispatch(updateComment(event.target.value))
//   }

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//   }

//   return (
//     <div className={styles.comentForm} ref={ref1}>
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <textarea className={styles.input} ref={inputRef} value={valueInitial} onChange={handleChange}></textarea>
//       <div className={styles.blockIconsButton}>
//         <div className={styles.componentIconComments}>
//           <IconComments ></IconComments>
//         </div>
//         <button type='submit' className={styles.button}>Комментировать</button> 
//       </div>  
//     </form>
//     </div>
//   );
// }

// export const ComentForm = forwardRef(ComentForms);
