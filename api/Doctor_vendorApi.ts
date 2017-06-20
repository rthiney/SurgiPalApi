/**
 * surgipal_master
 * API generated with [PHP-CRUD-API](https://github.com/mevdschee/php-crud-api)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class Doctor_vendorApi {
    protected basePath = 'https://surgipal.com/api/api.php';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
	
	/**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * List
     * 
     * @param exclude One or more related entities (comma separated).
     * @param include One or more related entities (comma separated).
     * @param order Column you want to sort on and the sort direction (comma separated). Example: id,desc
     * @param page Page number and page size (comma separated). NB: You cannot use \&quot;page\&quot; without \&quot;order\&quot;! Example: 1,10
     * @param transform Transform the records to object format. NB: This can also be done client-side in JavaScript!
     * @param columns The table columns you want to retrieve (comma separated). Example: posts.*,categories.name
     * @param filter[] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
     * @param satisfy Should all filters match (default)? Or any?
     */
    public doctorVendorGet(exclude?: string, include?: string, order?: string, page?: string, transform?: boolean, columns?: string, filter[]?: Array<string>, satisfy?: string, extraHttpRequestParams?: any): Observable<Array<models.InlineResponse20014>> {
        return this.doctorVendorGetWithHttpInfo(exclude, include, order, page, transform, columns, filter[], satisfy, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete
     * 
     * @param id Identifier for item.
     */
    public doctorVendorIdDelete(id: string, extraHttpRequestParams?: any): Observable<number> {
        return this.doctorVendorIdDeleteWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Read
     * 
     * @param id Identifier for item.
     */
    public doctorVendorIdGet(id: string, extraHttpRequestParams?: any): Observable<models.InlineResponse20014> {
        return this.doctorVendorIdGetWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Increment
     * 
     * @param id Identifier for item.
     * @param item Properties of item to update.
     */
    public doctorVendorIdPatch(id: string, item: models.Item44, extraHttpRequestParams?: any): Observable<number> {
        return this.doctorVendorIdPatchWithHttpInfo(id, item, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update
     * 
     * @param id Identifier for item.
     * @param item Properties of item to update.
     */
    public doctorVendorIdPut(id: string, item: models.Item43, extraHttpRequestParams?: any): Observable<number> {
        return this.doctorVendorIdPutWithHttpInfo(id, item, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create
     * 
     * @param item Item to create.
     */
    public doctorVendorPost(item: models.Item42, extraHttpRequestParams?: any): Observable<number> {
        return this.doctorVendorPostWithHttpInfo(item, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * List
     * 
     * @param exclude One or more related entities (comma separated).
     * @param include One or more related entities (comma separated).
     * @param order Column you want to sort on and the sort direction (comma separated). Example: id,desc
     * @param page Page number and page size (comma separated). NB: You cannot use \&quot;page\&quot; without \&quot;order\&quot;! Example: 1,10
     * @param transform Transform the records to object format. NB: This can also be done client-side in JavaScript!
     * @param columns The table columns you want to retrieve (comma separated). Example: posts.*,categories.name
     * @param filter[] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
     * @param satisfy Should all filters match (default)? Or any?
     */
    public doctorVendorGetWithHttpInfo(exclude?: string, include?: string, order?: string, page?: string, transform?: boolean, columns?: string, filter[]?: Array<string>, satisfy?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctor_vendor`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (exclude !== undefined) {
            queryParameters.set('exclude', <any>exclude);
        }
        if (include !== undefined) {
            queryParameters.set('include', <any>include);
        }
        if (order !== undefined) {
            queryParameters.set('order', <any>order);
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (transform !== undefined) {
            queryParameters.set('transform', <any>transform);
        }
        if (columns !== undefined) {
            queryParameters.set('columns', <any>columns);
        }
        if (filter[] !== undefined) {
            queryParameters.set('filter[]', <any>filter[]);
        }
        if (satisfy !== undefined) {
            queryParameters.set('satisfy', <any>satisfy);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete
     * 
     * @param id Identifier for item.
     */
    public doctorVendorIdDeleteWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctor_vendor/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling doctorVendorIdDelete.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Read
     * 
     * @param id Identifier for item.
     */
    public doctorVendorIdGetWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctor_vendor/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling doctorVendorIdGet.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Increment
     * 
     * @param id Identifier for item.
     * @param item Properties of item to update.
     */
    public doctorVendorIdPatchWithHttpInfo(id: string, item: models.Item44, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctor_vendor/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling doctorVendorIdPatch.');
        }
        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new Error('Required parameter item was null or undefined when calling doctorVendorIdPatch.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Patch,
            headers: headers,
            body: item == null ? '' : JSON.stringify(item), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update
     * 
     * @param id Identifier for item.
     * @param item Properties of item to update.
     */
    public doctorVendorIdPutWithHttpInfo(id: string, item: models.Item43, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctor_vendor/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling doctorVendorIdPut.');
        }
        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new Error('Required parameter item was null or undefined when calling doctorVendorIdPut.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: item == null ? '' : JSON.stringify(item), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create
     * 
     * @param item Item to create.
     */
    public doctorVendorPostWithHttpInfo(item: models.Item42, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctor_vendor`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new Error('Required parameter item was null or undefined when calling doctorVendorPost.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: item == null ? '' : JSON.stringify(item), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
