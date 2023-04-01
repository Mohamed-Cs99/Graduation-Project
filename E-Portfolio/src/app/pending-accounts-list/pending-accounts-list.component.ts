import { ProjectServiceService } from './../project-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pending-accounts-list',
  templateUrl: './pending-accounts-list.component.html',
  styleUrls: ['./pending-accounts-list.component.scss']
})
export class PendingAccountsListComponent {

  pendingAcc:any[]=[] ;
 constructor(private _ProjectServiceService:ProjectServiceService)
 {
  this._ProjectServiceService.getPendingAccounts().subscribe((data)=>
  {
    this.pendingAcc=data.pending; 
  })
 }
}
