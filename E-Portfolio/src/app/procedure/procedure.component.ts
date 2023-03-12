import { Component } from '@angular/core';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.scss']
})
export class ProcedureComponent {
  dt:Date | undefined;

  specialties:string[] = [
    "Burn Unit",
    "Cardiac Catheter",
    "Cardiothoracic Anaesthesia",
    "Dental and oral surgery",
    "Endoscopy",
    "ENT",
    "General surgery",
    "Neurosurgery, Neuroradiology and Neuro Critical Care",
    "Obstetrics and gynaecology",
    "Ophthalmology",
    "Orthopaedic Surgery",
    "Pain interventional therapy",
    "Paediatric surgery",
    "Plastic surgery",
    "Radiology: MRI",
    "Urosurgery",
    "Vascular surgery"
  ];
  options:string[] | undefined;
  secondaryOptions:string[] | undefined;

  secondarySpecialty:boolean = false;

  supervisor:boolean = false;
  
  regional:boolean = false;

  procedure:boolean = false;

  significantEvent:boolean = false;

  categories:string[] | undefined;

  ngOnInit(): void {
    this.dt = new Date();
  }

  showSpecialty(value: any, order: number) {
    if(value === "Burn Unit"){
      if (order === 1){
        this.options = [
          "Dressing under GA",
          "Escharotomy",
          "Skin graft",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Dressing under GA",
          "Escharotomy",
          "Skin graft",
          "Others"
        ];
      }
    }
    else if(value === "Cardiac Catheter") {
      if (order === 1){
        this.options = [
          "Congenital",
          "IVAR",
          "PCI",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Congenital",
          "IVAR",
          "PCI",
          "Others"
        ];
      }
    }
    else if(value === "Cardiothoracic Anaesthesia") {
      if (order === 1){
        this.options = [
        "Aortic dissection",
        "Aorta, thoracic aortic aneurysm, Thoracic Endovascular Aneurysm Repair (TEVAR)",
        "Aorta, thoracoabdominal aortic aneurysm, endovascular aneurysm repair (EVAR)",
        "Aorta, total arch replacement",
        "Cardiac, congenital heart disease, open heart surgery",
        "Cardiac, coronary artery bypass graft (off pump)",
        "Cardiac, coronary artery bypass graft on cardiopulmonary bypass",
        "Cardiac, insertion/ replacement of pacemaker",
        "Cardiac, pericardial effusion/tamponade, transthoracic drainage",
        "Cardiac, proximal aortic aneurysm, aortic root replacement with coronary artery reimplantation",
        "Cardiac, valve (repair / replacement), more than one valve",
        "Cardiac, valve (repair / replacement), one valve",
        "Thoracic, bronchoscopy foreign body, removal",
        "Thoracic, bronchoscopy with biopsy, bronchoalveolar lavage",
        "Thoracic, Resuscitative Trauma Thoracotomy (Haemostasis, Damage Control, Organ Repair)",
        "Thoracic, various lesions, intrathoracic operation on lungs/bronchial tree/mediastinum",
        "Thoracic, Various Lesions, Thoracotomy for Pleurectomy/Pleurodesis/ Enucleation Hydatid Cysts.",
        "Thoracic, lung transplantation",
        "Heart, lung, extra corporeal membrane oxygenation (ECMO)",
        "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Aortic dissection",
          "Aorta, thoracic aortic aneurysm, Thoracic Endovascular Aneurysm Repair (TEVAR)",
          "Aorta, thoracoabdominal aortic aneurysm, endovascular aneurysm repair (EVAR)",
          "Aorta, total arch replacement",
          "Cardiac, congenital heart disease, open heart surgery",
          "Cardiac, coronary artery bypass graft (off pump)",
          "Cardiac, coronary artery bypass graft on cardiopulmonary bypass",
          "Cardiac, insertion/ replacement of pacemaker",
          "Cardiac, pericardial effusion/tamponade, transthoracic drainage",
          "Cardiac, proximal aortic aneurysm, aortic root replacement with coronary artery reimplantation",
          "Cardiac, valve (repair / replacement), more than one valve",
          "Cardiac, valve (repair / replacement), one valve",
          "Thoracic, bronchoscopy foreign body, removal",
          "Thoracic, bronchoscopy with biopsy, bronchoalveolar lavage",
          "Thoracic, Resuscitative Trauma Thoracotomy (Haemostasis, Damage Control, Organ Repair)",
          "Thoracic, various lesions, intrathoracic operation on lungs/bronchial tree/mediastinum",
          "Thoracic, Various Lesions, Thoracotomy for Pleurectomy/Pleurodesis/ Enucleation Hydatid Cysts.",
          "Thoracic, lung transplantation",
          "Heart, lung, extra corporeal membrane oxygenation (ECMO)",
          "Others"
        ];
      }
    }
    else if(value === "Dental and oral surgery") {
      if (order === 1){
        this.options = [
        "Alveolar distraction",
        "Alveoplasty",
        "Arch bar insertion",
        "Aspiration biopsy",
        "Oral abscess",
        "Oral cyst",
        "Oral sinus",
        "Palatoplasty",
        "Partial excision of lip, tongue",
        "Root Canal",
        "Salivary gland excision",
        "Salivary gland Stone retrieval",
        "Sinus lifting and bone grafting",
        "Surgical closure of oroantral fistula",
        "TMJ injection",
        "Tooth extraction",
        "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Alveolar distraction",
          "Alveoplasty",
          "Arch bar insertion",
          "Aspiration biopsy",
          "Oral abscess",
          "Oral cyst",
          "Oral sinus",
          "Palatoplasty",
          "Partial excision of lip, tongue",
          "Root Canal",
          "Salivary gland excision",
          "Salivary gland Stone retrieval",
          "Sinus lifting and bone grafting",
          "Surgical closure of oroantral fistula",
          "TMJ injection",
          "Tooth extraction",
          "Others"
        ];
      }
    }
    else if(value === "Endoscopy") {
      if (order === 1){
      this.options = [
        "Colonoscopy",
        "ERCP",
        "Gastric balloon",
        "GIT endoscopy, upper",
        "Others"
      ];
    }
    else {
      this.secondaryOptions = [
        "Colonoscopy",
        "ERCP",
        "Gastric balloon",
        "GIT endoscopy, upper",
        "Others"
      ];
    }
    }
    else if(value === "ENT") {
      if (order === 1){
        this.options = [
          "Adenoidectomy",
          "Cholesteatoma",
          "Direct laryngoscope (DL)",
          "FESS",
          "Laryngectomy (Total), with/without neck dissection",
          "Larynx and pharynx, various lesions, laser application",
          "Myringoplasty",
          "Nasal fracture reduction (closed, open)",
          "Nasal valve reconstruction",
          "Parotidectomy",
          "Rhinoplasty",
          "Septoplasty",
          "Sinus lifting and bone grafting",
          "Submandibular gland removal",
          "Stapedectomy",
          "Thyroidectomy",
          "Tracheostomy",
          "Tonsillectomy",
          "T-tube insertion",
          "Tympano-mastoidectomy",
          "Tympanoplasty",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Adenoidectomy",
          "Cholesteatoma",
          "Direct laryngoscope (DL)",
          "FESS",
          "Laryngectomy (Total), with/without neck dissection",
          "Larynx and pharynx, various lesions, laser application",
          "Myringoplasty",
          "Nasal fracture reduction (closed, open)",
          "Nasal valve reconstruction",
          "Parotidectomy",
          "Rhinoplasty",
          "Septoplasty",
          "Sinus lifting and bone grafting",
          "Submandibular gland removal",
          "Stapedectomy",
          "Thyroidectomy",
          "Tracheostomy",
          "Tonsillectomy",
          "T-tube insertion",
          "Tympano-mastoidectomy",
          "Tympanoplasty",
          "Others"
        ];
      }
    }
    else if(value === "General surgery") {
      if (order === 1){
        this.options = [
          "Abdominoperineal surgery",
          "Anal surgery",
          "Appendectomy (open/laparoscopic)",
          "Bariatric surgery",
          "Breast surgery",
          "Cholecystectomy (open/laparoscopic)",
          "Colectomy, hemi-(open/laparoscopic)",
          "Colectomy, total (open/laparoscopic)",
          "Diaphragmatic hernia",
          "Esophageal surgery",
          "Excision of lymph node",
          "Feeding gastrostomy",
          "Hepatic, lobectomy",
          "Hepatic, liver transplantation",
          "Hernia repair, incisional",
          "Hernia repair, inguinal",
          "Hernia repair, umbilical",
          "Lipoma excision",
          "Parathyroidectomy",
          "Perianal fistula",
          "Pilonidal sinus",
          "Splenic surgery",
          "Thyroidectomy",
          "Whipple surgery",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Abdominoperineal surgery",
          "Anal surgery",
          "Appendectomy (open/laparoscopic)",
          "Bariatric surgery",
          "Breast surgery",
          "Cholecystectomy (open/laparoscopic)",
          "Colectomy, hemi-(open/laparoscopic)",
          "Colectomy, total (open/laparoscopic)",
          "Diaphragmatic hernia",
          "Esophageal surgery",
          "Excision of lymph node",
          "Feeding gastrostomy",
          "Hepatic, lobectomy",
          "Hepatic, liver transplantation",
          "Hernia repair, incisional",
          "Hernia repair, inguinal",
          "Hernia repair, umbilical",
          "Lipoma excision",
          "Parathyroidectomy",
          "Perianal fistula",
          "Pilonidal sinus",
          "Splenic surgery",
          "Thyroidectomy",
          "Whipple surgery",
          "Others"
        ];
      }
    }
    else if(value === "Neurosurgery, Neuroradiology and Neuro Critical Care") {
      if (order === 1){
        this.options = [
          "Craniotomy",
          "Brain stimulator insertion",
          "Carpel tunnel release (nerve decompression)",
          "Head injuries, emergency",
          "Hydrocephalus",
          "Meningocele",
          "Neuroradiology e.g., emergency, and elective imaging, interventional procedures",
          "Shunt surgery",
          "Spine surgery, Cervical",
          "Spine surgery, Lumbar",
          "Ventriculoplasty ",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Craniotomy",
          "Brain stimulator insertion",
          "Carpel tunnel release (nerve decompression)",
          "Head injuries, emergency",
          "Hydrocephalus",
          "Meningocele",
          "Neuroradiology e.g., emergency, and elective imaging, interventional procedures",
          "Shunt surgery",
          "Spine surgery, Cervical",
          "Spine surgery, Lumbar",
          "Ventriculoplasty ",
          "Others"
        ];
      }
    }
    else if(value === "Obstetrics and gynaecology") {
      if (order === 1){
        this.options = [
          "Adhesiolysis",
          "Anterior repair / Posterior repair",
          "Caesarean section",
          "Cervical biopsy",
          "Cervical Cerclage",
          "Colporrhaphy (classical repair)",
          "D&C",
          "Endometrial Ablation",
          "Endometrial or Uterine Biopsy",
          "Fallopian Tube, Removal of Ectopic Gestation",
          "Fallopian Tube/Uterus/Ovary, Laparoscopy, Therapeutic",
          "Ovary, Malignant Tumor/Cyst, Total Hysterectomy Bilateral Salpingo-Oophorectomy with Omentectomy, Surgical Staging With/Without Lymphadenectomy",
          "Uterus, Sub-Total/Total Hysterectomy, With/Without Salpingo-Oophorectomy",
          "Uterus/Cervix, Hysteroscopy, Diagnostic/ therapeutic (With General Anesthesia)",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Adhesiolysis",
          "Anterior repair / Posterior repair",
          "Caesarean section",
          "Cervical biopsy",
          "Cervical Cerclage",
          "Colporrhaphy (classical repair)",
          "D&C",
          "Endometrial Ablation",
          "Endometrial or Uterine Biopsy",
          "Fallopian Tube, Removal of Ectopic Gestation",
          "Fallopian Tube/Uterus/Ovary, Laparoscopy, Therapeutic",
          "Ovary, Malignant Tumor/Cyst, Total Hysterectomy Bilateral Salpingo-Oophorectomy with Omentectomy, Surgical Staging With/Without Lymphadenectomy",
          "Uterus, Sub-Total/Total Hysterectomy, With/Without Salpingo-Oophorectomy",
          "Uterus/Cervix, Hysteroscopy, Diagnostic/ therapeutic (With General Anesthesia)",
          "Others"
        ];
      }
    }
    else if(value === "Ophthalmology") {
      if (order === 1){
        this.options = [
          "Blepharoplasty",
          "Cataract",
          "Corneal transplant",
          "Glaucoma",
          "IOL exchange",
          "Iridotomy",
          "Nasolacrimal duct surgery (reconstruction)",
          "Orbital fracture repair",
          "Retinopexy",
          "Rupture globe",
          "Scleral buckling",
          "Strabismus",
          "Trabeculectomy",
          "Tumor excision",
          "Vitrectomy",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Blepharoplasty",
          "Cataract",
          "Corneal transplant",
          "Glaucoma",
          "IOL exchange",
          "Iridotomy",
          "Nasolacrimal duct surgery (reconstruction)",
          "Orbital fracture repair",
          "Retinopexy",
          "Rupture globe",
          "Scleral buckling",
          "Strabismus",
          "Trabeculectomy",
          "Tumor excision",
          "Vitrectomy",
          "Others"
        ];
      }
    }
    else if(value === "Orthopaedic Surgery") {
      if (order === 1){
        this.options = [
          "Ankle surgery (Open, arthroscopy)",
          "Closed reduction",
          "DHS",
          "External fixator (ilizarof)",
          "Fracture bone (ORIF)",
          "Hand surgery",
          "Hip surgery (arthroscopy, replacement)",
          "Intertrochanteric nail femur",
          "Knee surgery (arthroscopy, replacement)",
          "Pelvic surgery",
          "Shoulder surgery (arthroscopy, replacement)",
          "Spine surgery",
          "Tendon repair",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Ankle surgery (Open, arthroscopy)",
          "Closed reduction",
          "DHS",
          "External fixator (ilizarof)",
          "Fracture bone (ORIF)",
          "Hand surgery",
          "Hip surgery (arthroscopy, replacement)",
          "Intertrochanteric nail femur",
          "Knee surgery (arthroscopy, replacement)",
          "Pelvic surgery",
          "Shoulder surgery (arthroscopy, replacement)",
          "Spine surgery",
          "Tendon repair",
          "Others"
        ];
      }
    }
    else if(value === "Pain interventional therapy") {
      if (order === 1){
        this.options = [
          "Epidural steroid injection",
          "Kyphoplasty (balloon kyphoplasty)",
          "Major joint injections",
          "Medial branch blocks/facet joint injections",
          "Muscle and joint injections under ultrasound guidance",
          "Radiofrequency nerve ablations",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Epidural steroid injection",
          "Kyphoplasty (balloon kyphoplasty)",
          "Major joint injections",
          "Medial branch blocks/facet joint injections",
          "Muscle and joint injections under ultrasound guidance",
          "Radiofrequency nerve ablations",
          "Others"
        ];
      }
    }
    else if(value === "Paediatric surgery") {
      if (order === 1){
        this.options = [
          "Anorectal malformation (imperforate anus)",
          "Appendectomy (open/laparoscopic)",
          "Choanal Atresia",
          "Circumcision",
          "Congenital diaphragmatic hernia",
          "Congenital urological disorders",
          "Cystic hygromas",
          "Dermoid cyst",
          "Gastroschisis",
          "Hernia repair, inguinal",
          "Hernia repair, umbilical",
          "Hirschsprung disease",
          "Hydrocele",
          "Hypospadias",
          "Intestinal malrotation",
          "Intestinal obstruction",
          "Intussusception",
          "Meatal stenosis",
          "Omphalocele",
          "Testicular masses",
          "Thyroglossal cyst",
          "Tracheoesophageal fistula",
          "Undescended testis",
          "Volvulus",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Anorectal malformation (imperforate anus)",
          "Appendectomy (open/laparoscopic)",
          "Choanal Atresia",
          "Circumcision",
          "Congenital diaphragmatic hernia",
          "Congenital urological disorders",
          "Cystic hygromas",
          "Dermoid cyst",
          "Gastroschisis",
          "Hernia repair, inguinal",
          "Hernia repair, umbilical",
          "Hirschsprung disease",
          "Hydrocele",
          "Hypospadias",
          "Intestinal malrotation",
          "Intestinal obstruction",
          "Intussusception",
          "Meatal stenosis",
          "Omphalocele",
          "Testicular masses",
          "Thyroglossal cyst",
          "Tracheoesophageal fistula",
          "Undescended testis",
          "Volvulus",
          "Others"
        ];
      }
    }
    else if(value === "Plastic surgery") {
      if (order === 1){
        this.options = [
          "Abdominoplasty",
          "Body Lift, thigh lift, arm lift",
          "Breast (mammoplasty, augmentation, reduction)",
          "Carpal Tunnel, Cubital Tunnel",
          "Chest wall reconstruction",
          "Cleft lip/cleft palate",
          "Complex Abdominal Wall and Pelvic Reconstruction",
          "Facial Rejuvenation (face lift, neck lift, blepharoplasty)",
          "Flap, free",
          "Flap, local",
          "Liposuction",
          "Mandible, Closed reduction, and fixation",
          "Mandibular tumor excision",
          "Mandibular tumor excision and fixation with plate and screws",
          "Maxilla, Closed reduction, and fixation",
          "Maxilla, fracture zygoma",
          "Maxilloplasty with bone substitute",
          "Nerve Repair and Transfers",
          "Otoplasty (bat ear)",
          "Skin augmentation",
          "Skin Cancer Removal and Reconstruction",
          "Skin graft",
          "Soft Tissue/Skeletal Reconstruction",
          "Tendon Repairs, Tendon Transfers",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Abdominoplasty",
          "Body Lift, thigh lift, arm lift",
          "Breast (mammoplasty, augmentation, reduction)",
          "Carpal Tunnel, Cubital Tunnel",
          "Chest wall reconstruction",
          "Cleft lip/cleft palate",
          "Complex Abdominal Wall and Pelvic Reconstruction",
          "Facial Rejuvenation (face lift, neck lift, blepharoplasty)",
          "Flap, free",
          "Flap, local",
          "Liposuction",
          "Mandible, Closed reduction, and fixation",
          "Mandibular tumor excision",
          "Mandibular tumor excision and fixation with plate and screws",
          "Maxilla, Closed reduction, and fixation",
          "Maxilla, fracture zygoma",
          "Maxilloplasty with bone substitute",
          "Nerve Repair and Transfers",
          "Otoplasty (bat ear)",
          "Skin augmentation",
          "Skin Cancer Removal and Reconstruction",
          "Skin graft",
          "Soft Tissue/Skeletal Reconstruction",
          "Tendon Repairs, Tendon Transfers",
          "Others"
        ];
      }
    }
    else if(value === "Radiology: MRI") {
      if (order === 1){
        this.options = [
          "Sedation",
          "GA",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Sedation",
          "GA",
          "Others"
        ];
      }
    }
    else if(value === "Urosurgery") {
      if (order === 1){
        this.options = [
          "DJ application",
          "DJ removal",
          "Hydrocele",
          "Nephrectomy",
          "Partial or radical cystectomy",
          "Renal stone",
          "Testicular tumors",
          "TURP",
          "TURT",
          "Ureteroscope",
          "Urethroscopy",
          "Varicocele",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "DJ application",
          "DJ removal",
          "Hydrocele",
          "Nephrectomy",
          "Partial or radical cystectomy",
          "Renal stone",
          "Testicular tumors",
          "TURP",
          "TURT",
          "Ureteroscope",
          "Urethroscopy",
          "Varicocele",
          "Others"
        ];
      }
    }
    else if(value === "Vascular surgery") {
      if (order === 1){
        this.options = [
          "Angioplasty",
          "Aorta, Abdominal Aortic Aneurysm, Excision, and Insertion of Graft",
          "Aorta, ruptured aortic aneurysm, endo-vascular aortic repair (EVAR)",
          "Aorta, Thoracoabdominal Aortic Aneurysm, Endovascular Aneurysm Repair (EVAR)",
          "Aortic dissection",
          "Aorto-bifemoral bypass",
          "A-V shunt",
          "Carotid endarterectomy",
          "Embolectomy",
          "Femoropopliteal bypass",
          "Permcath insertion",
          "Superficialization",
          "Thrombectomy",
          "Varicose vein surgery",
          "Others"
        ];
      }
      else {
        this.secondaryOptions = [
          "Angioplasty",
          "Aorta, Abdominal Aortic Aneurysm, Excision, and Insertion of Graft",
          "Aorta, ruptured aortic aneurysm, endo-vascular aortic repair (EVAR)",
          "Aorta, Thoracoabdominal Aortic Aneurysm, Endovascular Aneurysm Repair (EVAR)",
          "Aortic dissection",
          "Aorto-bifemoral bypass",
          "A-V shunt",
          "Carotid endarterectomy",
          "Embolectomy",
          "Femoropopliteal bypass",
          "Permcath insertion",
          "Superficialization",
          "Thrombectomy",
          "Varicose vein surgery",
          "Others"
        ];
      }
    }
    else {
      this.options = undefined;
      this.secondaryOptions = undefined;
    }
  }

  setYes(n:number) {
    if (n === 1) {
      this.secondarySpecialty = true;
    }
    else if (n === 2) {
      this.regional = true;
    }
    else if (n === 3) {
      this.procedure = true;
    }
    else {
      this.significantEvent = true;
    }
  }

  setNo(n:number) {
    if (n === 1) {
      this.secondarySpecialty = false;
      this.secondaryOptions = undefined;
    }
    else if (n === 2) {
      this.regional = false;
    }
    else if (n === 3) {
      this.procedure = false;
      this.categories = undefined
    }
    else {
      this.significantEvent = false;
    }
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
    if (category === "Airway Management") {
      this.categories = [
        "Suction (Oral)",
        "Suction (ETT)",
        "Oro-/nasopharyngeal airways",
        "Supraglottic device (LMA)",
        "Supraglottic device (iGel)",
        "ETT (oral)",
        "ETT (nasal)",
        "ETT (double lumen)",
        "ETT using introducers (Gum elastic bougie)",
        "ETT using introducers (Stylet)",
        "ETT using intubating LMA",
        "Video-Laryngoscope",
        "Fiberoptic intubation; flexible (oral)",
        "Fiberoptic intubation; flexible (nasal)",
        "Fiberoptic bronchoscopy; BAL in the intubated patient",
        "Fiberoptic intubation; rigid",
        "Cricothyrotomy, needle",
        "Cricothyrotomy, surgical",
        "Percutaneous tracheostomy",
        "Airway Ultrasound"
      ];
    }
    else if (category === "Breathing") {
      this.categories = [
        "Oxygen administration (Nasal prong)",
        "Oxygen administration (Simple oxygen mask)",
        "Oxygen administration (non-rebreathing oxygen mask)",
        "Open mask ventilation",
        "Bag and valve mask ventilation",
        "Transtracheal Jet Ventilation",
        "Chest tube insertion",
        "Lung ultrasound",
        "Thoracocentesis"
      ];
    }
    else if (category === "Circulation") {
      this.categories = [
        "Venous sampling",
        "Intravenous cannulation",
        "Intravenous cannulation (Ultrasound-guided)",
        "Peripherally inserted central catheterization (PICC)",
        "Central venous line insertion-IJ",
        "Central venous line insertion-SC",
        "Central venous line insertion-Femoral",
        "Central venous line insertion-IJ (Ultrasound-guided)",
        "Central venous line insertion-SC (Ultrasound-guided)",
        "Central venous line insertion-Femoral (Ultrasound-guided)",
        "Arterial sampling for ABG",
        "Arterial cannulation",
        "Arterial cannulation (Ultrasound-guided)",
        "Injection, SC",
        "Injection, IM",
        "Injection, IV",
        "Intraosseous line insertion",
        "Mahoka Catheter insertion for dialysis",
        "Pulmonary artery ccatheterization",
        "Cardiac output monitoring device",
        "Porto-Cath",
        "ECMO",
        "Cardiopulmonary resuscitation",
        "Defibrillation",
        "Cardioversion",
        "Transcutaneous pacing",
        "Rapid ultrasound assessment for shocked patients (RUSH protocol)",
        "Transesophageal echocardiography",
        "Transthoracic echocardiography"
      ];
    }
    else if (category === "Other procedures") {
      this.categories = [
        "Nasogastric tube Insertion",
        "Paracentesis",
        "Urinary catheterization (male)",
        "Urinary catheterization (female)",
        "FAST examination in emergency case"
      ];
    }
  }
}
