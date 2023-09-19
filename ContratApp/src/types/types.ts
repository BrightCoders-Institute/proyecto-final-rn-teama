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
        employeeLocation: string;
    },
    job: {
        title: string;
        budget: number;
        limitDate: string;
        jobType: string;
        description: string;
        location: string;
    }
}