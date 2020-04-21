import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiComponentUtils, FormContainerComponent } from 'helion-ui-components';
import { PortalAssignmentModuleState } from '../../../../../store/assignment-module.state';
import { AcademicDetailsFormContainerController } from "./academic-details-form-container.controller";
import { ArtifactData } from 'helion-core';

@Component({
    selector: 'app-academic-details-form-container',
    templateUrl: './academic-details-form-container.component.html',
    styleUrls: ['./academic-details-form-container.component.scss']
})
export class AcademicDetailsFormContainerComponent extends FormContainerComponent {

	@Input()
	initData: ArtifactData = new ArtifactData();

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, AcademicDetailsFormContainerController);
    }

    ngOnInit(): void {
    }

}