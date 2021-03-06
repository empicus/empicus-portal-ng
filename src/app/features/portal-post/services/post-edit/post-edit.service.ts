import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalPostModuleState } from "../../store/portal-post-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitPostFormSuccessAction, 
    submitPostFormFailureAction 
} from "../../store/actions/post-form/post-form.actions";


@Injectable({
    providedIn: 'root'
})
export class PostEditService {

    constructor(private store: Store<PortalPostModuleState>, 
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'postEdit').subscribe((data) => {
                this.store.dispatch(submitPostFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitPostFormFailureAction({data: new ErrorData(error, requestData)}))
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

