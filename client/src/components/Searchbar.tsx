import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
	handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar(props: Props) {
	const { handleInput, handleSearch } = props;

	return (
		<div className='search-bar'>
			<div className='search-bar_container overflow-hidden rounded-md flex w-96 bg-gray-100 border-gray-400 border focus-within:border-gray-500 transition duration-150'>
				<input
					className='pl-5 pr-3 py-2 flex-1 bg-transparent focus:outline-none'
					type='text'
					onChange={handleInput}
				/>
				<button className='pl-4 pr-5 py-2' onClick={handleSearch}>
					<FontAwesomeIcon className='text-gray-400' icon={faSearch} />
				</button>
			</div>
		</div>
	);
}
