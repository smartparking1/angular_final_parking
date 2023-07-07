export class vehicle
{
  constructor(
    public vehicle_no?:string,
    public vehicle_type?:string,
    public checkin_time?:Date,
    public checkout_time?:Date,
    public slot?:number,
    public fine_amount?:number,
    public total_amount?:number,
    public parking_amount?:number,
    public checkin_by?:number,
    public checkout_by?:number,


  ){}
}
export class Slip{
  public vehicle_no?:string

}
