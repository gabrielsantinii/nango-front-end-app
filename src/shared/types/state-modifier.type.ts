export type StateModifier<Dto, InitialState = null> = (data: Dto | InitialState) => void;
