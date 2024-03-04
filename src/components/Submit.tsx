import selectedCategory from "../utils/selectedCategory"
import selectedState from "../utils/selectedState"

export default function Submit() {
	function submitPlaces(selectedCategory: string, selectedState: string) {
		if (selectedCategory && selectedState) {
			const url = new URL(
				`https://swoonstays.au/v1/place-categories/${selectedCategory}/?city=${selectedState}`
			)
			window.location.href = url.toString()
		}
		console.log("An error occured when submitting places")
	}
	return (
		<div className="pt-20 hover:trans md:pb-0 pb-10">
			{selectedCategory.value && selectedState.value ? (
				<button
					className="btn btn-primary btn-lg text-xl mt-10 mx-auto"
					href="#category"
					onClick={() =>
						submitPlaces(selectedCategory.value, selectedState.value)
					}
					disabled={false}
				>
					Find your SwoonStay
				</button>
			) : (
				<button
					className="btn btn-primary btn-lg text-xl mt-10 mx-auto"
					href="#category"
					onClick={() =>
						submitPlaces(selectedCategory.value, selectedState.value)
					}
					disabled={true}
				>
					Find your SwoonStay
				</button>
			)}
		</div>
	)
}
