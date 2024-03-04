type StepsProps = {
	currentStep: number
}

export default function Steps({ currentStep }: StepsProps) {
	const stepsItems = ["Place Category", "State"]

	return (
		<div className="flex md:block justify-center ml-5 text-lg md:text-md md:w-[30%] md:mx-auto p-10 md:p-20">
			<ul className="md:flex text-primary-content font-medium">
				{stepsItems.map((item, index) => {
					const stepNumber = index + 1
					const isCurrentStep = currentStep === stepNumber
					const isStepCompleted = currentStep > stepNumber

					return (
						<li className="flex-1 last:flex-none flex gap-x-2 md:items-center sm:flex-row">
							<div className="flex items-center flex-col gap-x-2">
								<div
									className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
										isStepCompleted
											? "bg-indigo-600 border-indigo-600"
											: isCurrentStep
											? "border-primary"
											: ""
									}`}
								>
									<span
										className={` ${
											isStepCompleted
												? "hidden"
												: isCurrentStep
												? "text-primary-content font-bold"
												: ""
										}`}
									>
										{stepNumber}
									</span>
									{isStepCompleted && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-5 h-5 text-white"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.5 12.75l6 6 9-13.5"
											/>
										</svg>
									)}
								</div>
							</div>
							<div className="h-8 flex items-center md:h-auto">
								<p
									className={`md:text-sm text-lg ${
										isCurrentStep ? "text-primary-content font-bold" : ""
									}`}
								>
									{item}
								</p>
							</div>
							<hr
								className={`hidden mr-2 w-full border md:block ${
									stepNumber === stepsItems.length
										? "hidden"
										: isStepCompleted
										? "border-primary"
										: ""
								}`}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
