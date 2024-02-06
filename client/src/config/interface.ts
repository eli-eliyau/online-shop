export interface ITabs {

        id: string,
        name: string,
        img: string,
        products: string[]

}

export interface IProducts {
        id: string;
        categoryId: string;
        img: string,
        prise: number;
        name: string;
        locationBar: number

}

export interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
}