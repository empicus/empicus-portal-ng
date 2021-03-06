import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalPathogenModuleState } from "../../store/portal-pathogen-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitPathogenFormSuccessAction, 
    submitPathogenFormFailureAction 
} from "../../store/actions/pathogen-form/pathogen-form.actions";


@Injectable({
    providedIn: 'root'
})
export class PathogenFormService {

    constructor(private store: Store<PortalPathogenModuleState>,
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'pathogenCreate').subscribe((data) => {
                this.store.dispatch(submitPathogenFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitPathogenFormFailureAction({data: new ErrorData(error, requestData)}))
        );
    }

    /**
     * 
     * @param data 
     * @param serviceName 
     */
    public create<T extends AbstractData>(data: T, serviceName: string): Observable<ResponseData> {
        let request: RequestData<T> = new RequestData<T>();
        request.data = data;
        request.serviceName = serviceName;
        request.serviceURL = this.urlService.getAndromedaURL() + serviceName;
        
        return this.httpService.create(request);
    }
}

