/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * A resource identity that is managed by the user of the service.
 */
export interface UserIdentity {
  /**
   * The principal ID of the user-assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The client ID of the user-assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clientId?: string;
}

/**
 * An identity that can be associated with a resource.
 */
export interface ResourceIdentity {
  /**
   * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an
   * implicitly created identity and a set of user-assigned identities. The type 'None' will remove
   * any identities. Possible values include: 'None', 'SystemAssigned', 'UserAssigned',
   * 'SystemAssigned, UserAssigned'
   */
  type?: IdentityType;
  /**
   * The list of user-assigned identities associated with the resource. The user-assigned identity
   * dictionary keys will be ARM resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
  userAssignedIdentities?: { [propertyName: string]: UserIdentity };
  /**
   * The principal id of the identity. This property will only be provided for a system-assigned
   * identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant id associated with the resource's identity. This property will only be provided for
   * a system-assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
}

/**
 * Settings concerning key vault encryption for a configuration store.
 */
export interface KeyVaultProperties {
  /**
   * The URI of the key vault key used to encrypt data.
   */
  keyIdentifier?: string;
  /**
   * The client id of the identity which will be used to access key vault.
   */
  identityClientId?: string;
}

/**
 * The encryption settings for a configuration store.
 */
export interface EncryptionProperties {
  /**
   * Key vault properties.
   */
  keyVaultProperties?: KeyVaultProperties;
}

/**
 * Describes a configuration store SKU.
 */
export interface Sku {
  /**
   * The SKU name of the configuration store.
   */
  name: string;
}

/**
 * An Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * The resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The location of the resource. This cannot be changed after the resource is created.
   */
  location: string;
  /**
   * The tags of the resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The configuration store along with all resource properties. The Configuration Store will have
 * all information to begin utilizing it.
 */
export interface ConfigurationStore extends Resource {
  /**
   * The managed identity information, if configured.
   */
  identity?: ResourceIdentity;
  /**
   * The provisioning state of the configuration store. Possible values include: 'Creating',
   * 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The creation date of configuration store.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly creationDate?: Date;
  /**
   * The DNS endpoint where the configuration store API will be available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly endpoint?: string;
  /**
   * The encryption settings of the configuration store.
   */
  encryption?: EncryptionProperties;
  /**
   * The sku of the configuration store.
   */
  sku: Sku;
}

/**
 * The parameters for updating a configuration store.
 */
export interface ConfigurationStoreUpdateParameters {
  /**
   * The encryption settings of the configuration store.
   */
  encryption?: EncryptionProperties;
  /**
   * The managed identity information for the configuration store.
   */
  identity?: ResourceIdentity;
  /**
   * The SKU of the configuration store.
   */
  sku?: Sku;
  /**
   * The ARM resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Parameters used for checking whether a resource name is available.
 */
export interface CheckNameAvailabilityParameters {
  /**
   * The name to check for availability.
   */
  name: string;
}

/**
 * The result of a request to check the availability of a resource name.
 */
export interface NameAvailabilityStatus {
  /**
   * The value indicating whether the resource name is available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nameAvailable?: boolean;
  /**
   * If any, the error message that provides more detail for the reason that the name is not
   * available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * If any, the reason that the name is not available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly reason?: string;
}

/**
 * An API key used for authenticating with a configuration store endpoint.
 */
export interface ApiKey {
  /**
   * The key ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * A name for the key describing its usage.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The value of the key that is used for authentication purposes.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: string;
  /**
   * A connection string that can be used by supporting clients for authentication.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly connectionString?: string;
  /**
   * The last time any of the key's properties were modified.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastModified?: Date;
  /**
   * Whether this key can only be used for read operations.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly readOnly?: boolean;
}

/**
 * The parameters used to regenerate an API key.
 */
export interface RegenerateKeyParameters {
  /**
   * The id of the key to regenerate.
   */
  id?: string;
}

/**
 * The parameters used to list a configuration store key-value
 */
export interface ListKeyValueParameters {
  /**
   * The key to retrieve.
   */
  key: string;
  /**
   * The label of the key.
   */
  label?: string;
}

/**
 * The result of a request to retrieve a key-value from the specified configuration store.
 */
export interface KeyValue {
  /**
   * The primary identifier of a key-value.
   * The key is used in unison with the label to uniquely identify a key-value.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly key?: string;
  /**
   * A value used to group key-values.
   * The label is used in unison with the key to uniquely identify a key-value.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly label?: string;
  /**
   * The value of the key-value.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: string;
  /**
   * The content type of the key-value's value.
   * Providing a proper content-type can enable transformations of values when they are retrieved
   * by applications.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly contentType?: string;
  /**
   * An ETag indicating the state of a key-value within a configuration store.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly eTag?: string;
  /**
   * The last time a modifying operation was performed on the given key-value.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastModified?: Date;
  /**
   * A value indicating whether the key-value is locked.
   * A locked key-value may not be modified until it is unlocked.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly locked?: boolean;
  /**
   * A dictionary of tags that can help identify what a key-value may be applicable for.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tags?: { [propertyName: string]: string };
}

/**
 * The display information for a configuration store operation.
 */
export interface OperationDefinitionDisplay {
  /**
   * The resource provider name: Microsoft App Configuration."
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * The resource on which the operation is performed.
   */
  resource?: string;
  /**
   * The operation that users can perform.
   */
  operation?: string;
  /**
   * The description for the operation.
   */
  description?: string;
}

/**
 * The definition of a configuration store operation.
 */
export interface OperationDefinition {
  /**
   * Operation name: {provider}/{resource}/{operation}.
   */
  name?: string;
  /**
   * The display information for the configuration store operation.
   */
  display?: OperationDefinitionDisplay;
}

/**
 * AppConfiguration error object.
 */
export interface ErrorModel {
  /**
   * Error code.
   */
  code?: string;
  /**
   * Error message.
   */
  message?: string;
}

/**
 * Private endpoint which a connection belongs to.
 */
export interface PrivateEndpoint {
  /**
   * The resource Id for private endpoint
   */
  id?: string;
}

/**
 * The state of a private link service connection.
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * The private link service connection status. Possible values include: 'Pending', 'Approved',
   * 'Rejected', 'Disconnected'
   */
  status?: ConnectionStatus;
  /**
   * The private link service connection description.
   */
  description?: string;
  /**
   * Any action that is required beyond basic workflow (approve/ reject/ disconnect). Possible
   * values include: 'None', 'Recreate'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly actionsRequired?: ActionsRequired;
}

/**
 * A private endpoint connection
 */
export interface PrivateEndpointConnection extends BaseResource {
  /**
   * The resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The provisioning status of the private endpoint connection. Possible values include:
   * 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The resource of private endpoint.
   */
  privateEndpoint?: PrivateEndpoint;
  /**
   * A collection of information about the state of the connection between service consumer and
   * provider.
   */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

/**
 * A resource that supports private link capabilities.
 */
export interface PrivateLinkResource {
  /**
   * The resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The private link resource group id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly groupId?: string;
  /**
   * The private link resource required member names.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly requiredMembers?: string[];
}

/**
 * Optional Parameters.
 */
export interface ConfigurationStoresListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A skip token is used to continue retrieving items after an operation returns a partial result.
   * If a previous response contains a nextLink element, the value of the nextLink element will
   * include a skipToken parameter that specifies a starting point to use for subsequent calls.
   */
  skipToken?: string;
}

/**
 * Optional Parameters.
 */
export interface ConfigurationStoresListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A skip token is used to continue retrieving items after an operation returns a partial result.
   * If a previous response contains a nextLink element, the value of the nextLink element will
   * include a skipToken parameter that specifies a starting point to use for subsequent calls.
   */
  skipToken?: string;
}

/**
 * Optional Parameters.
 */
export interface ConfigurationStoresListKeysOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A skip token is used to continue retrieving items after an operation returns a partial result.
   * If a previous response contains a nextLink element, the value of the nextLink element will
   * include a skipToken parameter that specifies a starting point to use for subsequent calls.
   */
  skipToken?: string;
}

/**
 * Optional Parameters.
 */
export interface OperationsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A skip token is used to continue retrieving items after an operation returns a partial result.
   * If a previous response contains a nextLink element, the value of the nextLink element will
   * include a skipToken parameter that specifies a starting point to use for subsequent calls.
   */
  skipToken?: string;
}

/**
 * An interface representing AppConfigurationManagementClientOptions.
 */
export interface AppConfigurationManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The result of a request to list configuration stores.
 * @extends Array<ConfigurationStore>
 */
export interface ConfigurationStoreListResult extends Array<ConfigurationStore> {
  /**
   * The URI that can be used to request the next set of paged results.
   */
  nextLink?: string;
}

/**
 * @interface
 * The result of a request to list API keys.
 * @extends Array<ApiKey>
 */
export interface ApiKeyListResult extends Array<ApiKey> {
  /**
   * The URI that can be used to request the next set of paged results.
   */
  nextLink?: string;
}

/**
 * @interface
 * The result of a request to list configuration store operations.
 * @extends Array<OperationDefinition>
 */
export interface OperationDefinitionListResult extends Array<OperationDefinition> {
  /**
   * The URI that can be used to request the next set of paged results.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of private endpoint connections
 * @extends Array<PrivateEndpointConnection>
 */
export interface PrivateEndpointConnectionListResult extends Array<PrivateEndpointConnection> {
  /**
   * The URI that can be used to request the next set of paged results.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of private link resources.
 * @extends Array<PrivateLinkResource>
 */
export interface PrivateLinkResourceListResult extends Array<PrivateLinkResource> {
  /**
   * The URI that can be used to request the next set of paged results.
   */
  nextLink?: string;
}

/**
 * Defines values for IdentityType.
 * Possible values include: 'None', 'SystemAssigned', 'UserAssigned', 'SystemAssigned,
 * UserAssigned'
 * @readonly
 * @enum {string}
 */
export type IdentityType = 'None' | 'SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned';

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Creating' | 'Updating' | 'Deleting' | 'Succeeded' | 'Failed' | 'Canceled';

/**
 * Defines values for ConnectionStatus.
 * Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
 * @readonly
 * @enum {string}
 */
export type ConnectionStatus = 'Pending' | 'Approved' | 'Rejected' | 'Disconnected';

/**
 * Defines values for ActionsRequired.
 * Possible values include: 'None', 'Recreate'
 * @readonly
 * @enum {string}
 */
export type ActionsRequired = 'None' | 'Recreate';

/**
 * Contains response data for the list operation.
 */
export type ConfigurationStoresListResponse = ConfigurationStoreListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStoreListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ConfigurationStoresListByResourceGroupResponse = ConfigurationStoreListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStoreListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ConfigurationStoresGetResponse = ConfigurationStore & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStore;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ConfigurationStoresCreateResponse = ConfigurationStore & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStore;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ConfigurationStoresUpdateResponse = ConfigurationStore & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStore;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type ConfigurationStoresListKeysResponse = ApiKeyListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApiKeyListResult;
    };
};

/**
 * Contains response data for the regenerateKey operation.
 */
export type ConfigurationStoresRegenerateKeyResponse = ApiKey & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApiKey;
    };
};

/**
 * Contains response data for the listKeyValue operation.
 */
export type ConfigurationStoresListKeyValueResponse = KeyValue & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: KeyValue;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ConfigurationStoresBeginCreateResponse = ConfigurationStore & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStore;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type ConfigurationStoresBeginUpdateResponse = ConfigurationStore & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStore;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ConfigurationStoresListNextResponse = ConfigurationStoreListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStoreListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ConfigurationStoresListByResourceGroupNextResponse = ConfigurationStoreListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationStoreListResult;
    };
};

/**
 * Contains response data for the listKeysNext operation.
 */
export type ConfigurationStoresListKeysNextResponse = ApiKeyListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApiKeyListResult;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type OperationsCheckNameAvailabilityResponse = NameAvailabilityStatus & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NameAvailabilityStatus;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationDefinitionListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationDefinitionListResult;
    };
};

/**
 * Contains response data for the listByConfigurationStore operation.
 */
export type PrivateEndpointConnectionsListByConfigurationStoreResponse = PrivateEndpointConnectionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnectionListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type PrivateEndpointConnectionsBeginCreateOrUpdateResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the listByConfigurationStoreNext operation.
 */
export type PrivateEndpointConnectionsListByConfigurationStoreNextResponse = PrivateEndpointConnectionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnectionListResult;
    };
};

/**
 * Contains response data for the listByConfigurationStore operation.
 */
export type PrivateLinkResourcesListByConfigurationStoreResponse = PrivateLinkResourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateLinkResourceListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PrivateLinkResourcesGetResponse = PrivateLinkResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateLinkResource;
    };
};

/**
 * Contains response data for the listByConfigurationStoreNext operation.
 */
export type PrivateLinkResourcesListByConfigurationStoreNextResponse = PrivateLinkResourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateLinkResourceListResult;
    };
};
