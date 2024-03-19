import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { passwordOff, passwordOn } from '../assets/images';

const Button = (props) => {

  const { className, label } = props;

  return (
    <button type='button' className={`custom-btn ${className}`}>{label}</button>
  )
}

export const InputProps = (props) => {
  const { placeholder, type, name, id, value, onChange, disabled } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <span className="w-100">
      <input
        type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
        placeholder={placeholder}
        className={`w-full h-[50px] px-2 bg-transparent outline-none border-2 border-solid border-inputBorder rounded-[8px] placeholder:text-[16px]`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        autoComplete="on"
      />
      <div className="relative">
        {type === "password" && (
          <img
            src={isPasswordVisible ? passwordOff : passwordOn}
            alt="password-view-icon"
            className={`absolute right-5 bottom-4 cursor-pointer ${!value && 'opacity-[0.4]'}`}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
    </span>
  );
}

export function SignInOptions(props) {
  const { label, src } = props;

  return (
    <button className="custom-btn">
      <img src={src} alt="logo" width={25} height={25} />
      <p className="font-syne text-[18px]">{label}</p>
    </button>
  );
}



export default Button;