
import {Injectable} from "@angular/core"
import { vehicle } from "./vehilcle.model"

@Injectable()
export class StaticDataSource
{
  public vehicles: vehicle[]=[
    // new vehicle("AP 35 MP 0147",12,"4 wheeler",2,60,50,110),
    // new vehicle("AP 23 CS 1456",22,"2 wheeler",5,100,0,100),
    // new vehicle("KA 06 AS 2365",32,"3 wheeler",4,90,0,90)
  ]

}
