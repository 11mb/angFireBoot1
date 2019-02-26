import { ModelBase } from "../../general/model-base";
import { Type } from "class-transformer";


export class ProductInfo {
    code: string = ''
    supplier: string = ''
    constructor() {
    }
}

export class Product2 extends ModelBase {
    name: string = ''
    description: string = ''
    stock: number = 0
    @Type(() => ProductInfo)
    details: ProductInfo = new ProductInfo()
    constructor() {
        super()
    }
}