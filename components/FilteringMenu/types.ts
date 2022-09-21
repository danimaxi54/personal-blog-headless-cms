export interface FilteringMenuPropsType {
    view: {
        list: boolean;
    };
    sortingType: {
        asc: boolean;
    };
    onChange: (
        option: string,
        value: { list: boolean } | { asc: boolean }
    ) => void;
}
