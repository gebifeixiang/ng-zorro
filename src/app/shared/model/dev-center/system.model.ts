export class SystemBase {
  public id: number;
  public name: string;
  public description: string;
  public protocol: string;
  public domain: string;
  public logoUrl: string;
  public createTime: string;
  public lastModifyTime: string;
}


export class SystemMaintenance {
  public id: string;
  public location: string;
  public systemId: number;
  public creater: string;
  public beginTime: string;
  public endTime: string;
  public title: string;
  public content: string;
  public status: number;
  public createTime: string;
  public lastModifyTime: string;
}
