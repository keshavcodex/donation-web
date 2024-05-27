export const toTitleCase = (sentence: string) => {
	if (sentence == null || sentence.length === 0) return '';
	return sentence.replace(
		/\b\w+\b/g,
		(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	);
};

export const toSentenceCase = (sentence: string) => {
	return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
};
