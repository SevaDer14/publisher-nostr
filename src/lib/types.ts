type InitRequestState = {
	state: 'init';
};
type LoadingRequestState = {
	state: 'loading';
};
type SuccessRequestState = {
	state: 'success';
	data: unknown;
};
type ErrorRequestState = {
	state: 'error';
	message: string;
};

export type RequestState =
	| InitRequestState
	| LoadingRequestState
	| SuccessRequestState
	| ErrorRequestState;

export type PriceUnit = {
	unit: string;
	value: number;
};

export type HtmlTag = ParagraphTag | PaidTag;

export type ParagraphTag = {
	type: 'p';
	innerText: string;
};

export type PaidTag = {
	type: 'paid';
    role: string;
	length: number;
	price: number;
};
