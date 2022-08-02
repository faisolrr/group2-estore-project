const ButtonSmall = (props) => {
	return (
		<div>
			<button
				className="bg-[#557EBC] font-medium text-white text-2xl rounded-md hover:bg-sky-700  w-24 h-10"
				type="button"
				onClick={props.onClick}
			>
				{props.label}
			</button>
		</div>
	);
};

const ButtonLarge = (props) => {
	return (
		<div>
			<button
				className="bg-[#557EBC] py-2 px-3 w-56 h-12 rounded-2xl sm:w-80 sm:h-16 sm:text-3xl md:w-96 lg:h-20 font-bold text-white md:text-4xl md:rounded-3xl hover:bg-sky-700 "
				type="submit"
			>
				{props.label}
			</button>
		</div>
	);
};

export { ButtonSmall, ButtonLarge };
