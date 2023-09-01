import { isDef } from "src/utils/utils";

export class ReqBodyPostLogin {
  public email?: string;
  public password?: string;

  public static create(obj: any): ReqBodyPostLogin {
    return {
      email: isDef(obj.email) ? obj.email : undefined,
      password: isDef(obj.password) ? obj.password : undefined,
    };
  }
}
