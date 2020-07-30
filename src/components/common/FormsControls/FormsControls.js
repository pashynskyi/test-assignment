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


// const adaptFileEventToValue = delegate =>
//   e => delegate(e.target.files[0])

// export const FileInput = ({
//   input: {
//     value: omitValue,
//     onChange,
//     onBlur,
//     ...inputProps
//   },
//   meta: omitMeta,
//   ...props
// }) => {

//   const hasError = omitMeta.touched && omitMeta.error;

//   return (
//     <div className={`${'formControl'} ${hasError ? 'error' : ""}`}>
//       <div>
//         <input
//           onChange={adaptFileEventToValue(onChange)}
//           onBlur={adaptFileEventToValue(onBlur)}
//           type="file"
//           {...inputProps}
//           {...props}
//         />
//       </div>
//       {hasError && <span>{omitMeta.error}</span>}
//     </div>
//   )
// }
