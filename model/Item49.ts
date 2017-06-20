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

import * as models from './models';

export interface Item49 {
    id: number;

    doctorDataId?: number;

    hospitalDataId?: number;

    username: string;

    usernameCanonical: string;

    email: string;

    emailCanonical: string;

    enabled: number;

    salt: string;

    password: string;

    lastLogin?: string;

    locked: number;

    expired: number;

    expiresAt?: string;

    confirmationToken?: string;

    passwordRequestedAt?: string;

    roles: string;

    credentialsExpired: number;

    credentialsExpireAt?: string;

    practiceId?: number;

    activationToken?: string;

    vendorDataId?: number;

    staffOfId?: number;

}
