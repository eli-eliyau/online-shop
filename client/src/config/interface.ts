export interface ICategory {
        id: string,
        name: string,
        img: string,
}

export interface IProducts {
        id: string;
        categoryId: string;
        nameCategory:string;
        img: string,
        price: number;
        name: string;
        locationBar: number

}

export interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
}