import React, { createContext, useContext } from "react";

interface Props {
	backgroundColor?: string;
	textColor?: string;
	children: JSX.Element[] | JSX.Element;
}

const ThemeContext = createContext<String>("");

export function AlertBanner(props: Props) {
	const { children, backgroundColor, textColor } = props;
	let color = textColor === undefined ? "text-white" : textColor;
	let bgColor = backgroundColor === undefined ? "bg-black" : backgroundColor;
	const theme = useContext(ThemeContext);

	return (
		<div className={bgColor + " w-full flex justify-evenly"}>
			<ThemeContext.Provider value={color}>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child);
				})}
			</ThemeContext.Provider>
		</div>
	);
}

interface AlertBannerProps {
	title: string;
	subtitle: string;
}

export function AlertBannerText(props: AlertBannerProps) {
	const { title, subtitle } = props;
	const theme = useContext(ThemeContext)

	const className = 'alert-banner text-center ' + theme;
	return (
		<div className={className}>
			<p className="font-extrabold text-xl">{title}</p>
			<p className="font-bold text-lg">{subtitle}</p>
		</div>
	);
}
