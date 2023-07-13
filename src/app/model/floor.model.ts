import { Building } from 'src/app/model/building.model';
export class Floor
{
  public floor_id?:number
  public floor_no?:string
  public floor_slots?:Slottype
  public status?:string
  public building?:Building
  public location?:string


}

export class Slottype{
  public two_wheeler?:number
  public four_wheeler?:number
}
