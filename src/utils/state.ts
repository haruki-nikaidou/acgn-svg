export interface Accessor<T> {
    (): T,
    addHook: (fn: (prev: T) => {}) => void,
};
export type Setter<T> = (newValue: T) => void;

type State<T> = {
    _field: T;
    _hooks: ((prev: T) => {})[];
    get: Accessor<T>;
    set: Setter<T>;
}

export function useState<T>(init: T): [Accessor<T>, Setter<T>] {
    // init props
    let getFunction: (() => T) | null | Accessor<T> = () => state._field;
    (getFunction as Accessor<T>).addHook = () => {};
    const state: State<T> = {
        _field: init,
        _hooks: [],
        get: getFunction as Accessor<T>,
        set: () => {}
    }
    getFunction = null;
    state._hooks = [];

    // impl set()
    const setFunction: Setter<T> = (newValue) => {
        const oldValue = state._field;
        const hooks = state._hooks;
        state._field = newValue;
        for (const hook of hooks) {
            hook(oldValue);
        }
    }
    state.set = setFunction;

    // impl `addHook`
    state.get.addHook = (fn: (prev: T) => {}) => {
        const hooks = state._hooks;
        hooks.push(fn);
    }

    // return
    return [state.get, state.set];
}

export function useEffect<T>(fn: (prev: T) => {}, value: Accessor<T>) {
    value.addHook!(fn);
}