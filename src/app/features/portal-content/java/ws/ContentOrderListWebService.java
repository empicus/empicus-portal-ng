/**
 * 
 */
package com.alstrabank.writing.content.ws;

import java.util.List;
import java.util.stream.Collectors;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstrabank.writing.content.model.ContentOrder;
import com.alstrabank.writing.content.service.ContentOrderService;
import com.cloderia.enterprise.model.ArtifactData;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.data.RequestData;
import com.cloderia.enterprise.service.data.ResponsePayloadData;
import com.cloderia.enterprise.ws.AbstractWebService;
import com.cloderia.enterprise.ws.WebService;
import com.cloderia.enterprise.ws.annotations.WebServiceAllowedMethods;
import com.cloderia.enterprise.ws.annotations.WebServiceProvider;
import com.cloderia.enterprise.ws.util.ListWebServiceUtil;
import com.cloderia.enterprise.ws.util.WebConstants;

/**
 * @author edward
 *
 */
@Stateless
@WebServiceProvider(name = "contentOrderList")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_GET })
public class ContentOrderListWebService extends AbstractWebService implements WebService {
	
	@Inject
	ContentOrderService contentOrderService;
	
	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		
		EntityDataCriteria<ContentOrder> criteria = new EntityDataCriteria<ContentOrder>(ContentOrder.ARTIFACT_NAME, ContentOrder.class);
		List<ArtifactData> items = contentOrderService.findByCriteria(criteria)
			.stream()
			.map((item) -> item.toEntityData())
			.collect(Collectors.toList());
		return new ResponsePayloadData(items);
	}

	@Override
	protected void validateRequest(RequestData requestData) throws BusinessServiceException {
		super.validateRequest(requestData);
		ListWebServiceUtil.validateRequest(requestData);
	}
}
