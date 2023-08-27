import React, { FC } from "react"
import { IconType } from "react-icons"

interface PropType {
	text: string
	width?: "full" | "default" | ""
	Icon?: IconType
	handler: Function
	custom?: string
}

const Button: FC<PropType> = (props) => {
	const { handler, text, width, Icon, custom } = props
	return (
		<div>
			<button
				onClick={(e) => handler()}
				className={` text-white bg-primary px-3 h-10 rounded-lg ${
					width === "full" ? "w-full" : width === "default" ? "" : "w-" + width
				} ${Icon != undefined ? "flex items-center " : ""} ${custom}`}
			>
				{Icon && <Icon size={20} />}
				<span className='mx-auto'>{text}</span>
			</button>
		</div>
	)
}

export default Button
