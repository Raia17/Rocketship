import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Carousel, { CarouselImage } from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { AlertBanner, AlertBannerText } from "../layouts/AlertBanner";
import Navbar from "../layouts/Navbar";

export default function HomePage() {
	return (
		<div className='App'>
			<Navbar />

			<AlertBanner>
				<AlertBannerText
					title='Transportes grátis'
					subtitle='Em compras superiores a 50€'
				/>
				<AlertBannerText
					title='Preparado para o Natal?'
					subtitle='Escolhe os melhores presentes na RS'
				/>
				<AlertBannerText
					title='Prazo de devoluções alargado'
					subtitle='para 1 mês durante o Natal'
				/>
			</AlertBanner>

			<Carousel>
				<CarouselImage src='/assets/images/homepage/carousel-main-item.png' />
				<CarouselImage src='/assets/images/homepage/carousel-main-item.png' />
				<CarouselImage src='/assets/images/homepage/carousel-main-item.png' />
				<CarouselImage src='/assets/images/homepage/carousel-main-item.png' />
				<CarouselImage src='/assets/images/homepage/carousel-main-item.png' />
			</Carousel>

			<main className='w-full max-w-7xl mx-auto py-20'>
				<header>
					<h2 className='font-black text-4xl text-center mb-2'>
						AS TUAS MARCAS FAVORITAS
					</h2>
					<h3 className='font-bold text-2xl text-center uppercase'>
						Só na RocketShip
					</h3>
				</header>

				<Banner>
					<p className=''>Test</p>
				</Banner>

				<section className='display-cards grid grid-cols-3 gap-2'>
					<DisplayCard
						title='HOMEM'
						gender='Homem'
						image='/assets/images/homepage/display-cards-men.jpg'
					/>
					<DisplayCard
						title='MULHER'
						gender='Mulher'
						image='/assets/images/homepage/display-cards-women.jpg'
					/>
					<DisplayCard
						title='CRIANÇA'
						gender='Criança'
						image='/assets/images/homepage/display-cards-children.jpg'
					/>
				</section>

				<Banner>
					<p>Publicidade</p>
				</Banner>

				<Banner>
					<div>
						<h2>Encontre o seu presente perfeito</h2>
						<form action='' className="flex gap-2">
							<select name="category">
								<option value="1" selected>-- Categoria --</option>
								<option value="2">Roupa</option>
								<option value="3">Calçado</option>
								<option value="4">Acessórios</option>
							</select>
							<select name="genre">
								<option value="1" selected>-- Género --</option>
								<option value="2">Homem</option>
								<option value="3">Mulher</option>
								<option value="4">Criança</option>
							</select>
							<select name="brand">
								<option value="1" selected>-- Marca --</option>
								<option value="2">Adidas</option>
								<option value="3">Nike</option>
								<option value="4">Puma</option>
							</select>
							<select name="price">
								<option value="1" selected>-- Preço --</option>
								<option value="2">0€ - 20€</option>
								<option value="3">20€ - 50€</option>
								<option value="4">50€ - 75€</option>
								<option value="4">75€ - 100€</option>
								<option value="4">100€ +</option>
							</select>
							<button>Procurar presente</button>
						</form>
					</div>
					
				</Banner>

				<div className='grid grid-cols-3 gap-4'>
					<ProductCard
						product={{
							id: 1,
							image: "/assets/images/homepage/display-cards-children.jpg",
							name: "test",
							brand: "adidas",
							price: "99,99€",
						}}
					/>
					<ProductCard
						product={{
							id: 1,
							image: "/assets/images/homepage/display-cards-children.jpg",
							name: "test",
							brand: "adidas",
							price: "99,99€",
						}}
					/>
					<ProductCard
						product={{
							id: 1,
							image: "/assets/images/homepage/display-cards-children.jpg",
							name: "test",
							brand: "adidas",
							price: "99,99€",
						}}
					/>
					<ProductCard
						product={{
							id: 1,
							image: "/assets/images/homepage/display-cards-children.jpg",
							name: "test",
							brand: "adidas",
							price: "99,99€",
						}}
					/>
					<ProductCard
						product={{
							id: 1,
							image: "/assets/images/homepage/display-cards-children.jpg",
							name: "test",
							brand: "adidas",
							price: "99,99€",
						}}
					/>
					<ProductCard
						product={{
							id: 1,
							image: "/assets/images/homepage/display-cards-children.jpg",
							name: "test",
							brand: "adidas",
							price: "99,99€",
						}}
					/>
				</div>
			</main>
		</div>
	);
}

interface DisplayCardProps {
	image: string;
	title: string;
	gender: string;
}

function DisplayCard(props: DisplayCardProps) {
	return (
		<div className='display-card h-[85vh] relative overflow-hidden'>
			<img
				src={props.image}
				alt={props.gender + "-banner"}
				className='object-cover h-full w-full'
			/>
			<div className='display-card-content flex flex-col text-left w-full gap-1 px-2 absolute bottom-4'>
				<h2 className='text-3xl font-black text-white drop-shadow-lg'>{props.title}</h2>
				<DisplayCardButton displayCard={props} query='roupa'>
					Roupa
				</DisplayCardButton>
				<DisplayCardButton displayCard={props} query='calcado'>
					Calçado
				</DisplayCardButton>
				<DisplayCardButton displayCard={props} query='acessorios'>
					Acessórios
				</DisplayCardButton>
			</div>
		</div>
	);
}

interface DisplayCardButtonProps {
	displayCard: DisplayCardProps;
	query: string;
	children: string;
}

function DisplayCardButton(props: DisplayCardButtonProps) {
	const { displayCard, query, children } = props;

	return (
		<Link
			className='bg-gradient-to-r from-black/50 to-transparent text-white text-lg py-2 px-4 rounded-md transition-transform hover:translate-x-2 hover:from-red-800/90 '
			to={displayCard.gender.toLowerCase() + "?q=" + query}
		>
			{children} de {displayCard.gender}
		</Link>
	);
}
