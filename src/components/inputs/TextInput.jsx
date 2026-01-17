const TextInput = ({label,name,onChange, value, required = true, type}) => {
    return (   <div className="mb-4">
            <label htmlFor={name} className="block font-semibold">
              {label}
            </label>
            <input
              name={name}
              type={type}
              className="w-full p-2 border rounded-lg"
              value={value}
              onChange={onChange}
            />
          </div> );
}
 
export default TextInput;