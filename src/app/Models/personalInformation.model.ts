export class PersonalInformation {
    gender: string = "";
    firstName: string = "";
    lastName: string = "";
    birthDate: Date = new Date();
    address: string = "";
    zipCode!: number;
    location: string = "";
    civilStatus: string = "";
    nationality: string = "";
    religion: string = "";
    homeTown: string = "";
    phone!: number;
    email: string = "";
    finmaNumber!: number;
    ciceroNumber!: number;
    permit: string = "";
    movedLastYear: boolean = false;
    previousAddress: string = "";
    moveDate: Date = new Date();
}