<<<<<<< HEAD
import React from "react";
import { BeatLoader } from "react-spinners";

export interface ButtonPropType {
  label: string;
  loading?: boolean;
  className?: string;
  onClick?: any;
  colspan?: number;
}

const Button = ({
  label,
  loading,
  className,
  onClick,
  colspan,
}: ButtonPropType) => {
  return (
    <div className={`px-2 col-span-${colspan || 1}`}>
      <button
        data-testid={label.toLowerCase().replace(/[^A-Z0-9]+/gi, "_")}
        onClick={onClick}
        type={onClick ? "button" : "submit"}
        className={`${
          className
            ? className
            : "text-white bg-blue-600 hover:bg-blue-700 focus:ring-offset-2 focus:ring-blue-700 flex w-full justify-center py-2 px-4 rounded-md border border-transparent shadow-sm text-sm font-medium focus:outline-none"
        }  disabled:text-white disabled:bg-gray-200 `}
      >
        {loading ? (
          <>
            <div className={` flex justify-center items-center text-blue-800`}>
              <BeatLoader size={6} color={"#fff"} />
            </div>
          </>
        ) : (
          <>
            {/* <span className="self-center">{icon && icon}</span> */}
            <span className="self-center">{label}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Button;
=======
import React, { FC } from "react"
import { IconType } from "react-icons"

interface PropType {
	text: string
	width?: "full" | "default" | ""
	Icon?: IconType
	handler: Function
}

const Button: FC<PropType> = (props) => {
	const { handler, text, width, Icon } = props
	return (
		<div>
			<button
				onClick={(e) => handler()}
				className={`text-white bg-primary px-3 h-10 rounded-lg ${
					width === "full" ? "w-full" : width === "default" ? "" : "w-" + width
				} ${Icon != undefined ? "flex items-center " : ""}`}
			>
				{Icon && <Icon size={20} />}
				<span className='mx-auto'>{text}</span>
			</button>
		</div>
	)
}

export default Button
>>>>>>> fadb1e147aaec249def0c15157ee8ec0b66c428a
