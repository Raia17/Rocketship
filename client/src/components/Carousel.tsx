import {
	faArrowLeft,
	faArrowRight,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

interface CarouselProps {
	children: JSX.Element[] | JSX.Element;
	delay?: number;
}

export default function Carousel(props: CarouselProps) {
	const { children, delay } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	function updateIndex(index: number) {
		if (index < 0) {
			index = React.Children.count(children) - 1;
		} else if (index >= React.Children.count(children)) {
			index = 0;
		}

		setActiveIndex(index);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) {
				updateIndex(activeIndex + 1);
			}
		}, delay || 7000);

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	return (
		<div
			className='carousel overflow-hidden relative'
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div
				className='carousel-inner whitespace-nowrap transition-transform duration-500'
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child);
				})}
			</div>
			<div className='carousel-handlers w-full flex justify-between px-6 absolute top-1/2 -translate-y-1/2'>
				<CarouselButtons
					direction='left'
					onClick={() => updateIndex(activeIndex - 1)}
				/>
				<CarouselButtons
					direction='right'
					onClick={() => updateIndex(activeIndex + 1)}
				/>
			</div>
			<div className="indicators absolute w-full flex justify-center gap-1 bottom-6">
				{
					React.Children.map(children, (child, index) => {
						if (index === activeIndex) {
							return <CarouselIndicators active />
						}
						return <CarouselIndicators />
					})
				}
			</div>
		</div>
	);
}

interface CarouselImageProps {
	src: string;
}

export function CarouselImage(props: CarouselImageProps) {
	const { src } = props;

	return (
		<div className='carousel-item inline-flex items-center justify-center h-[85vh] bg-slate-700 text-white w-full'>
			<img className='h-[85vh] w-full object-cover' src={src} />
		</div>
	);
}

interface CarouselButtonsProps {
	direction?: string;
	onClick(): void;
}

function CarouselButtons(props: CarouselButtonsProps) {
	const { direction, onClick } = props;

	let iconDirection: IconDefinition;

	if (direction === "left") {
		iconDirection = faArrowLeft;
	} else {
		iconDirection = faArrowRight;
	}

	return (
		<button
			className='text-white bg-slate-500 bg-opacity-50 px-3 py-2 rounded-full'
			onClick={onClick}
		>
			<FontAwesomeIcon icon={iconDirection} />
		</button>
	);
}

interface CarouselIndicatorsProps {
	active?: boolean;
}

function CarouselIndicators(props: CarouselIndicatorsProps) {
	return (
		<span className={(props.active ? "opacity-90" : "opacity-40") + " bg-white h-1 w-10 transition-opacity duration-500"}></span>
	)
}
