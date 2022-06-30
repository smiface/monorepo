const classes = {
  md: ' p-2 ',
  xl: ' pl-8 pr-8 pt-4 pb-4 ',
  red: ' bg-red-100 hover:bg-red-200 ',
  green: ' bg-green-100 hover:bg-green-200 ',
  lite: ' bg-slate-100 hover:bg-slate-200 ',
};

export interface ButtonProps {
  fn: () => void;
  isDisabled?: boolean;
  color?: keyof typeof classes;
  size?: keyof typeof classes;
  addition?: string;
  children?: string;
  text: string | number;
  variant?: 'primary' | 'secondary';
}

const newclasses = {
  primary: 'p-2 border-2 border-slate-300 transition-all duration-300 ',
};

export const Button = (props: ButtonProps) => {
  // const s = ['md', 'xl'].find(el => el === props.size) ? classes[props.size] : classes['md']
  // const c = ['red', 'green', 'lite'].find(el => el == props.color) ? classes['lite'] : classes['lite']
  const s = classes[props.size === 'md' || props.size === 'xl' ? props.size : 'md'];
  const c = classes[props.color === 'red' || props.color === 'green' || props.color === 'lite' ? props.color : 'green'];

  const prev = 'p-2 border-2 border-slate-300 transition-all ';
  const custom = s + c;
  const cn = prev + custom + props.addition;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {props.isDisabled === true ? (
        <button onClick={props.fn} className={cn} disabled>
          {props.text}
        </button>
      ) : (
        <button onClick={props.fn} className={cn}>
          {props.text}
        </button>
      )}
    </>
  );
};

// export default Button;
