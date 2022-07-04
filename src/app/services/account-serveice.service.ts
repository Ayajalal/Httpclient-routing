import { AccountEdit } from '../model/UserPost.model';

import { Injectable } from '@angular/core';
import { Account } from '../model/UserPost.model';

@Injectable({
  providedIn: 'root'
})
export class AccountServeiceService {
accounts:Account[]=[];
  constructor() { }
  getAccounts():Account[]{
return this.accounts;
  }
  addAcounts(account:Account):string{
   const newAccount = this.accounts.find(acc=>acc.id===account.id);
    if(newAccount){
      return "account already exist";
    }
    this.accounts.push(account);
    return "account added sucessfully";
  }
  editAccount(id:number,body:AccountEdit):string{
    const accounttoEdit=this.accounts.find(account=>account.id===id);
    if(accounttoEdit){
      accounttoEdit.clientName=body.clientName;
      accounttoEdit.description=body.description;
      accounttoEdit.legalEntity=body.legalEntity;
      return "Account updated ";
    }
    return "not found!"
  }
  deleteAccount(id:number):string{
    const index=this.accounts.findIndex(account=>account.id==id);
    if(index>1){
      this.accounts.splice(index,1);
      return "account deleted sucessfully";

    }
    return "account not deleterd"
  }
}
