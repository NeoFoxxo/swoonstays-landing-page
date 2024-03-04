import selectedState from "../utils/selectedState"
import Steps from "./Steps"
import Submit from "./Submit"
import { states } from "../data/states"
import selectedCategory from "../utils/selectedCategory"

export default function State() {
	function handleClick(e: preact.JSX.TargetedEvent<HTMLInputElement, Event>) {
		const currentState = e.currentTarget.alt
		const isSelected = e.currentTarget.checked

		if (isSelected) {
			selectedState.value = currentState
		}
	}

	if (!selectedCategory.value) {
		return <div></div>
	}

	return (
		<div
			className="flex flex-col text-center md:h-screen bg-[url('/img/rocks.jpg')] bg-opacity-5 bg-cover bg-center"
			id="state"
		>
			<div className="hero-overlay bg-opacity-40">
				<Steps currentStep={2} />
				<h2 className="text-4xl md:text-5xl text-white font-bold">
					What State Would You Visit?
				</h2>
				<p className="text-xl mt-4 text-white">Choose your State</p>
				<section className="flex flex-wrap justify-center mx-auto mt-12 gap-5 md:w-[48%]">
					{states.map((state) => {
						return (
							<input
								className="btn text-secondary-content"
								type="radio"
								name="stateGroup"
								alt={state.urlState}
								aria-label={state.niceState}
								onChange={handleClick}
								value={state.niceState}
							/>
						)
					})}
				</section>
				{/* <p className="text-3xl mt-4 text-white">
					Selected State: {selectedState}
				</p> */}
				<Submit />
			</div>
		</div>
	)
}
