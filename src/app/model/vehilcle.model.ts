export class vehicle
{
  static vehicleNumber: any;
  constructor(
    public vehicleNumber?:string,
    public slotId?:number,
    public vehicleType?:string,
    public hours?:number,
    public amount?:number,
    public fine?:number,
    public totalAmount?:number
  ){}
}
