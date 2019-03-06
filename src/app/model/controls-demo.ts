
import { ModelBase } from "../../general/model-base";

export class ControlsDemo extends ModelBase {
    isChecked: boolean = false
    date: number = 0
    name: string = ''
    password: string = ''
    description: string = ''
    number: number = 0
    singleSelect: string = ''
    multiSelect: string[] = []
    radio: string = ''
  
    constructor() {
      super()
    }
  }