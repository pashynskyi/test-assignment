import React from 'react';

export const Input = ({ input, meta, ...props }) => {

  const hasError = meta.touched && meta.error;
  return (
    <div className={`${'formControl'} ${hasError ? 'error' : ""}`}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

// export const Select = ({ input, meta, ...props }) => {

//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={`${'formControl'} ${hasError ? 'error' : ""}`}>
//       <div>
//         <select {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }