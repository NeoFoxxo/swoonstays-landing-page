import selectedCategory from "../utils/selectedCategory"

export default function NextButton() {
	return (
		<div className="pt-20 hover:trans md:pb-0 pb-10">
			{selectedCategory.value ? (
				<a
					className="btn btn-primary btn-lg text-xl mt-10 mx-auto"
					href="#state"
				>
					Continue
				</a>
			) : null}
		</div>
	)
}
