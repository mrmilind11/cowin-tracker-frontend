import { IVaccineSession } from "./vaccine-session.interface";

export interface IVaccineCentre {
    center_id: string;
    address: string;
    state_name: string;
    district_name: string;
    block_name: string;
    pincode: string;
    lat: number;
    long: number;
    from: string;
    to: string;
    fee_type: string;
    sessions: IVaccineSession[];
}