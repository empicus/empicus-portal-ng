/**
 * 
 */
package com.alstradocs.empicus.diseasecase.ws;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.diseasecase.service.DiseaseCaseService;

import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.data.RequestData;
import com.cloderia.enterprise.service.data.ResponsePayloadData;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.cloderia.enterprise.ws.AbstractWebService;
import com.cloderia.enterprise.ws.WebService;
import com.cloderia.enterprise.ws.annotations.WebServiceAllowedMethods;
import com.cloderia.enterprise.ws.annotations.WebServiceProvider;
import com.cloderia.enterprise.ws.annotations.WebServiceSecurity;
import com.cloderia.enterprise.ws.data.WebRequestData;
import com.cloderia.enterprise.ws.util.WebConstants;

/**
 * @author edward
 *
 */
@Stateless
@WebServiceProvider(name = "diseaseCaseDelete")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_DELETE })
public class DiseaseCaseDeleteWebService extends AbstractWebService implements WebService {
	
	@Inject
	DiseaseCaseService diseaseCaseService;
	
	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		WebRequestData webRequestData = (WebRequestData) requestData;
		diseaseCaseService.delete(webRequestData.getCode());
		return new ResponsePayloadData();
	}

	@Override
	protected void validateRequest(RequestData requestData) throws BusinessServiceException {
		super.validateRequest(requestData);

		WebRequestData webRequestData = (WebRequestData) requestData;
		if (!webRequestData.getQueryParameters().containsKey(WebConstants.CODE_FIELD))
			throw new BusinessDataNotFoundException("Insufficient information provided");
	}
}
