type InitRequestState = {
    state: "init",
}
type LoadingRequestState = {
    state: "loading",
}
type SuccessRequestState = {
    state: "success",
    data: unknown,
}
type ErrorRequestState = {
    state: "error",
    message: string,
}

export type RequestState = InitRequestState | LoadingRequestState | SuccessRequestState | ErrorRequestState