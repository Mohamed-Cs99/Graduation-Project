import { Component } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.scss']
})
export class ProcedureComponent {
  timeData: any[] = [];
  AgeCategory: any[] = [];
  AgeUnits: any[] = [];
  Supervision: any[] = [];
  SupervisorRole: any[] = [];
  CoreSkill: any[] = [];
  CoreSkillCategory: any[] = [];
  Facility:any[]=[]; 
  Specialty:any[]=[]; 
 constructor(private _ProjectServiceService:ProjectServiceService)
 {
  this._ProjectServiceService.getSharedData().subscribe((data)=>{
      this.timeData = data.Time;
      this.AgeCategory = data.AgeCategory;
      this.AgeUnits = data.AgeUnits;
      this.Supervision = data.Supervision;
      this.SupervisorRole = data.SupervisorRole;
      this.CoreSkill = data.CoreSkill;
      this.CoreSkillCategory = data.CoreSkillCategory;
  })

  this._ProjectServiceService.getProcedurData().subscribe((data)=>{
   this.Facility=data.Facility;   
   this.Specialty=data.Specialty;  
  })
 }

  dt:Date | undefined;

  options:string[] | undefined;
  secondaryOptions:string[] | undefined;

  secondarySpecialty:boolean = false;

  supervisor:boolean = false;
  
  regional:boolean = false;

  procedure:boolean = false;

  significantEvent:boolean = false;

  categories!:any[];

  ngOnInit(): void {
    this.dt = new Date();
  }

  showSupervisor(supervisor:string) {
    if (supervisor === "Immediate" || supervisor === "Local" || supervisor === "Distant" ) {
      this.supervisor = true;
    }
    else {
      this.supervisor = false;
    }
  }

  showCategories(category:string) {
    this.categories = [];
    for (let i = 0; i < this.CoreSkillCategory.length; i++) {
      if (this.CoreSkillCategory[i].CS_ID == category)
        this.categories.push(this.CoreSkillCategory[i]);
    }
  }
}
