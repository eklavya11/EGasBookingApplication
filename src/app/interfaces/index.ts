export interface LoginDTO {
    password: string;
    email: string;
}

export class BankDTO {
    accountNo!: number;
    addessLine1!: string;
    addessLine2!: string;
    bankId!: number;
    bankName!: string;
    city!: string;
    country!: string;
    ifscNo!: string;
    state!: string;
    zipCode!: string;
}

export interface AdminRegisterDTO {
    addessLine1: string;
    addessLine2: string;
    adminName: string;
    city: string;
    country: string;
    email: string;
    mobileNumber: string;
    password: string;
    state: string;
    userId: number;
    username: string;
    zipCode: string;
}

export interface CylinderDTO {
    cylinderId: number;
    type: string;
    weight: number;
    price: number;
    strapColor: string;
}

export class CustomerRegisterDTO {
    addessLine1!: string;
    addessLine2!: string;
    bank!: BankDTO;
    city!: string;
    country!: string;
    cylinder!: CylinderDTO;
    email!: string;
    mobileNumber!: string;
    pan!: string;
    password!: string;
    state!: string;
    userId!: number;
    username!: string;
    zipCode!: string;
}

export interface GasBookingDto {
    bill: number;
    bookingDate: string | Date;
    gasBookingId: number;
    status: boolean;
}