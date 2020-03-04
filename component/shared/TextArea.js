export const TextArea =({input, type, label, className})=>{
  return(<div class="form-group">
        <lable>{label}</lable>
        <div class="input-group">
          <TextArea {...input} class={className}></TextArea>
        </div>
  </div>)

}