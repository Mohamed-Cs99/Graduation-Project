import { Component } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-anaethetic',
  templateUrl: './anaethetic.component.html',
  styleUrls: ['./anaethetic.component.scss'],
})
export class AnaetheticComponent {
  timeData: any[] = [];
  AgeCategory: any[] = [];
  AgeUnits: any[] = [];
  Supervision: any[] = [];
  SupervisorRole: any[] = [];
  CoreSkill: any[] = [];
  CoreSkillCategory: any[] = [];
  Facility: any[] = [];
  ASAPS: any[] = [];
  CasePriority: any[] = [];
  Specialty: any[] = [];
  Operation: any[] = [];
  Teaching: any[] = [];
  ModeOfAnesthesia: any[] = [];
  RegionalType: any[] = [];
  Technique: any[] = [];
  constructor(private _ProjectServiceService: ProjectServiceService) {
    this._ProjectServiceService.getSharedData().subscribe((data) => {
      this.timeData = data.Time;
      this.AgeCategory = data.AgeCategory;
      this.AgeUnits = data.AgeUnits;
      this.Supervision = data.Supervision;
      this.SupervisorRole = data.SupervisorRole;
      this.CoreSkill = data.CoreSkill;
      this.CoreSkillCategory = data.CoreSkillCategory;
    });

    this._ProjectServiceService.getAnetheticData().subscribe((data) => {
      this.Facility = data.Facility;
      this.ASAPS = data.ASAPS;
      this.CasePriority = data.CasePriority;
      this.Specialty = data.Specialty;
      console.log(this.Specialty);
      this.Operation = data.Operation;
      console.log(this.Operation);
      this.Teaching = data.Teaching;
      this.ModeOfAnesthesia = data.ModeOfAnesthesia;
      this.Technique = data.Technique;
      this.RegionalType = data.RegionalType;
    });
  }
  dt: Date | undefined;

  options!: any[];
  secondaryOptions!: any[];

  secondarySpecialty: boolean = false;

  supervisor: boolean = false;

  regional: boolean = false;

  procedure: boolean = false;

  significantEvent: boolean = false;

  others: boolean = false;
  secondaryOthers: boolean = false;

  categories!: any[];

  ngOnInit(): void {
    this.dt = new Date();
  }

  showSpecialty(value: any, order: number) {
    if (order === 1) {
      this.options = [];
      for (let i = 0; i < this.Operation.length; i++) {
        if (this.Operation[i].Specialty_ID == value)
          this.options.push(this.Operation[i]);
      }
    } else if (order === 2) {
      this.secondaryOptions = [];
      for (let i = 0; i < this.Operation.length; i++) {
        if (this.Operation[i].Specialty_ID == value)
          this.secondaryOptions.push(this.Operation[i]);
      }
    }
  }

  setYes(n: number) {
    if (n === 1) {
      this.secondarySpecialty = true;
    } else if (n === 2) {
      this.regional = true;
    } else if (n === 3) {
      this.procedure = true;
    } else {
      this.significantEvent = true;
    }
  }

  setNo(n: number) {
    if (n === 1) {
      this.secondarySpecialty = false;
    } else if (n === 2) {
      this.regional = false;
    } else if (n === 3) {
      this.procedure = false;
    } else {
      this.significantEvent = false;
    }
  }

  showSupervisor(supervisor: string) {
    if (
      supervisor === 'Immediate' ||
      supervisor === 'Local' ||
      supervisor === 'Distant'
    ) {
      this.supervisor = true;
    } else {
      this.supervisor = false;
    }
  }

  showCategories(category: any) {
    this.categories = [];
    for (let i = 0; i < this.CoreSkillCategory.length; i++) {
      if (this.CoreSkillCategory[i].CS_ID == category)
        this.categories.push(this.CoreSkillCategory[i]);
    }
  }

  showOthers(typeOperation: string, order: number) {
    if (typeOperation == "Others") {
      if (order === 1) {
        this.others = true;
      } else if (order === 2) {
        this.secondaryOthers = true;
      }
    }
    else {
      if (order === 1) {
        this.others = false;
      } else if (order === 2) {
        this.secondaryOthers = false;
      }
    }
  }
}
