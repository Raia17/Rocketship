import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";

export default function Navbar() {
	function handleSearch(event: React.MouseEvent<HTMLButtonElement>): void {
		console.log(event.currentTarget);
	}

	function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
		console.log(event.currentTarget.value);
	}

	return (
		<div className='navbar w-100'>
			<header className='w-3/5 mx-auto py-3'>
				<div className='nav-header-wrapper flex justify-between items-center w-full'>
					<div className='logo flex gap-4 items-center'>
						<FontAwesomeIcon icon={faRocket} className='text-2xl' />
						<h2 className="text-2xl font-serif">Rocketship</h2>
					</div>
					<Searchbar handleSearch={handleSearch} handleInput={handleInput} />
					{/* TODO - Account Component (Login/Signin - Logout) */}
				</div>
			</header>
			<nav>
				<div className='flex justify-center py-3'>
					<NavbarLinks to='novidades'>Novidades</NavbarLinks>
					<NavbarLinks to='homem'>Homem</NavbarLinks>
					<NavbarLinks to='mulher'>Mulher</NavbarLinks>
					<NavbarLinks to='crianca'>Criança</NavbarLinks>
					<NavbarLinks to='colecoes'>Coleções</NavbarLinks>
				</div>
			</nav>
		</div>
	);
}


interface Props {
    children: string;
	to: string;
}

function NavbarLinks(props: Props) {
	const { to, children } = props;

	return (
		<Link 
            className='py-2 px-5 nav-link' 
            to={to}
        >
			{ children }
		</Link>
	);
}