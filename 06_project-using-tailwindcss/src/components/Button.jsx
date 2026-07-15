import { MoveRight } from "lucide-react";

const Button = (props) => {
  return (
    <div>
      <button className="flex items-center justify-center gap-2 bg-gray-500 text-amber-50 border border-white rounded-full px-4 py-1">
        {props.text}
        <MoveRight size={18} />
      </button>
    </div>
  );
};

export default Button;