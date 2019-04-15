export {
  SystemBase,
  SystemMaintenance
} from './dev-center/system.model';


export class ApiResult {
  status: 'OK' | 'ERROR';
  result: Result;
}

export class Result {
  msg: string;
  code: string;
  data: any;
}
