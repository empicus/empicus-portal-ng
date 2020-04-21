import { 
    Entity, IsText, 
    Description, IsRequired 
} from "helion-ui-forms";

@Entity({ artifactName: 'contentDataForm' })
export class  AcademicDataFormData  {

    @IsText()
    @Description("Include Summary")
    includeSummary: string;

    @IsText()
    @Description("Include Plagiarism Report")
    includePlagReport: string;

    @IsText()
    @Description("Include Editor Check")
    includeEditorCheck: string;

    @IsText()
    @Description("Include Source Copy")
    includeSourcesCopy: string;
    
    @IsText()
    @Description("Include Priority Support")
    includePrioritySupport: string;

    @IsText()
    @Description("Attach File")
    document: string;
}