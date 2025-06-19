import { ExaminationGoalType } from "../enum/ExaminationGoalType";
import { GradingType } from "../enum/GradingType";
import { PreparationType } from "../enum/PreparationType";
import { RolesType } from "../enum/RolesType";
import { StatusExaminationType } from "../enum/StatusExaminationType";

// interface for examination model
export interface ExaminationModel {
    _id: string;
    goal: ExaminationGoalType;
    preparationType: PreparationType;
    slideId: string;
    examinationDate: string;
    imagePreview: string;
    statusExamination: StatusExaminationType;
    examinationPlanDate: string;
    PIC: UserModel;
    DPJP: UserModel;
    systemResult: SystemResultModel;
    expertResult: ExpertResultModel;
}

// interface for examination PIC model
export interface UserModel {
    _id: string;
    name: string;
    role: RolesType;
    email: string;
    username: string;
}

// interface for system result model
export interface SystemResultModel {
    _id: string;
    systemGrading: GradingType;
    confidenceLevelAggregated: number;
    systemBacteriaTotalCount: number;
}

// interface for expert result model
export interface ExpertResultModel {
    _id: string;
    finalGrading: GradingType;
    notes: string;
}