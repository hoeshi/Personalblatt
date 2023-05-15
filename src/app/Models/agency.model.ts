export class Agency {
    name: string;
    position: string;
    entry: Date | null;
    address: string;
    zip: string;
    city: string;
  
    constructor(
      name: string,
      address: string,
      zip: string,
      city: string,
      entry: Date | null,
      position: string
    ) {
      this.name = name;
      this.position = position;
      this.entry = entry;
      this.address = address;
      this.zip = zip;
      this.city = city;
    }
  }