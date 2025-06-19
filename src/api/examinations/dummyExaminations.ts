import { ApiResponse } from "@/lib/apiUtils";
import { ExaminationGoalType } from "@/schemas/enum/ExaminationGoalType";
import { GradingType } from "@/schemas/enum/GradingType";
import { PreparationType } from "@/schemas/enum/PreparationType";
import { RolesType } from "@/schemas/enum/RolesType";
import { StatusExaminationType } from "@/schemas/enum/StatusExaminationType";
import { ExaminationModel } from "@/schemas/examination/model";

export async function getExaminationDetailDummy(id: string): Promise<ApiResponse<ExaminationModel>> {
    const data = {
        _id: '1',
        goal: ExaminationGoalType.SCREENING,
        preparationType: PreparationType.SP,
        slideId: 'BRN-12345678',
        examinationDate: '27/12/2001',
        imagePreview: 'https://is3.cloudhost.id/oculab-fov/oculab-fov/e89a072b-f859-40aa-96b3-0f0e771dbd02.png',
        statusExamination: StatusExaminationType.FINISHED,
        examinationPlanDate: '27/12/2003',
        PIC: {
            _id: '1',
            name: 'Bunga Aura Prameswari',
            role: RolesType.LAB,
            email: 'bungaurap@gmail.com',
            username: 'bungaprameswari'
        },
        DPJP: {
            _id: '1',
            name: 'Testing Admin JANGAN DIGANTI',
            role: RolesType.ADMIN,
            email: 'testingAdmin',
            username: 'testingAdmin'
        },
        systemResult: {
            _id: '1',
            systemGrading: GradingType.Plus1,
            confidenceLevelAggregated: 0.6270214915275574,
            systemBacteriaTotalCount: 12
        },
        expertResult: {
            _id: '1',
            finalGrading: GradingType.Plus1,
            notes: 'Terdapat 40 bakteri dalam 100 lapangan pandang'
        }
    };  

    return {
        status: 'success',
        code: 200,
        message: 'Data fetched successfully',
        data: data as unknown as ExaminationModel,
    };
}