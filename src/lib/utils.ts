import { PRICE_UNITS } from "./constants";

export const satsToString = (sats: number): string => {
    if (sats < 0) throw new Error("Price cannot be negative")

	const priceUnits = Object.values(PRICE_UNITS).sort((a, b) => b.value - a.value);
	for (let i = 0; i < priceUnits.length; i++) {
		const {value, unit} = priceUnits[i]

		if (sats > value) return `${(sats / value).toFixed(1)} ${unit}`;
	}

	return `${sats} sats`;
}
