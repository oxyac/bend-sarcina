export class Product{
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: string;
  countActive: number;



  constructor(id: number, areaId: number, joinedWith: number, sku: string, defaultSku: string, status: string, countActive: number) {
    this.id = id;
    this.areaId = areaId;
    this.joinedWith = joinedWith;
    this.sku = sku;
    this.defaultSku = defaultSku;
    this.status = status;
    this.countActive = countActive;
  }
}
