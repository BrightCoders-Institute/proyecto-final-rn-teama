export interface RootState {
    data: {
        userType: number;
        isLoggedIn: boolean;
        employName: string;
        employEmail: string;
        employPassword: string;
        employPhone: string;
        employAddress: string;
        employTypeService: string;
        employDescription: string;
        employDaysWork: string;
        employTimeAM: string;
        employTimePM: string;
        employPriceMin: string;
        employPriceMax: string;
    }
}