import { ModelBase } from "../../general/model-base";
import { Type } from "class-transformer";

export class CustomerGeneral {
    name: string = ''
    info: string = ''

    constructor() {

    }
}

export class CustomerAddress {
    street: string = ''
    city: string = ''
    country: string = ''

    constructor() {

    }
}

export class Customer extends ModelBase {
    @Type(() => CustomerGeneral)
    general: CustomerGeneral 

    @Type(() => CustomerAddress)
    address: CustomerAddress

    constructor() {
        super()
        this.general = new CustomerGeneral()
        this.address = new CustomerAddress()
    }
}