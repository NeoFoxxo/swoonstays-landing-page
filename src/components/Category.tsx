import selectedCategory from "../utils/selectedCategory"
import Steps from "./Steps"
import { categories } from "../data/categories"
import NextButton from "./NextButton"

export default function Category() {
	function handleClick(e: preact.JSX.TargetedEvent<HTMLInputElement, Event>) {
		const currentCategory = e.currentTarget.alt // the alt has the url formatted category
		const isSelected = e.currentTarget.checked

		if (isSelected) {
			selectedCategory.value = currentCategory
		}
	}

	return (
		<div
			className="flex flex-col text-center h-screen bg-[url('/img/sydney.jpg')] bg-opacity-5 bg-cover bg-center"
			id="category"
		>
			<div className="hero-overlay bg-opacity-40">
				<Steps currentStep={1} />
				<h2 className="text-4xl md:text-5xl text-white font-bold">
					What Type Of Place Would You Visit?
				</h2>
				<p className="text-xl mt-4 text-white">Choose your stay category</p>
				<section className="flex flex-wrap justify-center mx-auto mt-12 gap-5 md:w-[48%]">
					{categories.map((category) => {
						return (
							<input
								className="btn text-secondary-content"
								type="radio"
								name="categoryGroup"
								alt={category.urlCategory}
								aria-label={category.niceCategory}
								onChange={handleClick}
								value={category.niceCategory}
							/>
						)
					})}
				</section>
				{/* <p className="text-3xl mt-4 text-white">
					Selected Category {selectedCategory}
				</p> */}
				<NextButton />
			</div>
		</div>
	)
}
