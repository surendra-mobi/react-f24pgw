export const Input =({input, type, label, className,meta:{touched, error }})=>{
  return(<div class="form-group">
        <lable>{label}</lable>
        <div class="input-group">
          <input {...input} class={className}/>
        </div>
              {meta.touched && meta.error &&
       <span className="error">{meta.error}</span>}

  </div>)

}