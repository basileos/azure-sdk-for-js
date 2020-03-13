/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/extensionTopicsMappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClientContext } from "../eventGridManagementClientContext";

/** Class representing a ExtensionTopics. */
export class ExtensionTopics {
  private readonly client: EventGridManagementClientContext;

  /**
   * Create a ExtensionTopics.
   * @param {EventGridManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventGridManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the properties of an extension topic.
   * @summary Get properties of an extension topic.
   * @param scope The identifier of the resource to which extension topic is queried. The scope can
   * be a subscription, or a resource group, or a top level resource belonging to a resource provider
   * namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   * for Azure resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionTopicsGetResponse>
   */
  get(scope: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionTopicsGetResponse>;
  /**
   * @param scope The identifier of the resource to which extension topic is queried. The scope can
   * be a subscription, or a resource group, or a top level resource belonging to a resource provider
   * namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   * for Azure resource.
   * @param callback The callback
   */
  get(scope: string, callback: msRest.ServiceCallback<Models.ExtensionTopic>): void;
  /**
   * @param scope The identifier of the resource to which extension topic is queried. The scope can
   * be a subscription, or a resource group, or a top level resource belonging to a resource provider
   * namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   * for Azure resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(scope: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtensionTopic>): void;
  get(scope: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtensionTopic>, callback?: msRest.ServiceCallback<Models.ExtensionTopic>): Promise<Models.ExtensionTopicsGetResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExtensionTopicsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.EventGrid/extensionTopics/default",
  urlParameters: [
    Parameters.scope1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionTopic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};