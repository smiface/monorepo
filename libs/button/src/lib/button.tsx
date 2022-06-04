/* eslint-disable-next-line */
export interface ButtonProps {
  fn: () => void;
  color?: string;
  size?: string;
  addition?: string;
  children?: string;
  text: string | number;
}

export const Button = (props: ButtonProps) => {
  const classes = {
    md: ' p-2 ',
    xl: ' pl-8 pr-8 pt-4 pb-4 ',
    red: ' bg-red-100 hover:bg-red-200 ',
    green: ' bg-green-100 hover:bg-green-200 ',
    lite: ' bg-slate-100 hover:bg-slate-200 '
  };

  const s = ['md', 'xl'].find(el => el === props.size) ? classes[props.size] : classes['md']
  const c = ['red', 'green', 'lite'].find(el => el == props.color) ? classes[props.color] : classes['lite']
  const prev = 'p-2 border-2 border-slate-300 transition-all duration-300 ';
  const custom = s + c;
  const cn = prev + custom + props.addition;

  return (
    <button onClick={props.fn} className={cn}>
      {props.text}
    </button>
  );
};

// export default Button;
