import type { PriceUnit } from "./types";

export const PRICE_UNITS: { [ket: string]: PriceUnit } = {
	BTC: { unit: 'BTC', value: 100_000_000 },
	mBTC: { unit: 'mBTC', value: 100_000 },
	kSats: { unit: 'kSats', value: 1000 }
};
