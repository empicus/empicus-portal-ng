import { Component, Input } from '@angular/core';
import {
	DataFormWidget, FormWidgetComponentController,
	UiComponentConfig, UiComponentUtils, UiContextData
} from 'helion-ui-components';
import { EntityData } from 'helion-ui-forms';
import { DataFormController } from 'helion-ui-components';
import { AbstractData } from 'helion-core';

@Component({
	selector: 'user-form-widget',
	templateUrl: './user-form-widget.component.html'
})
export class UserFormWidgetComponent extends DataFormWidget {


	@Input()
	public entityData: EntityData;

	@Input()
	public config: UiComponentConfig;

	uiController: FormWidgetComponentController;

	constructor() {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, DataFormController);
    }
    
	onUiComponentInit(contextData: UiContextData<AbstractData>){
        super.onUiComponentInit(contextData);
    }

}

