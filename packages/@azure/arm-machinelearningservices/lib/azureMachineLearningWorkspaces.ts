/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AzureMachineLearningWorkspacesContext } from "./azureMachineLearningWorkspacesContext";


class AzureMachineLearningWorkspaces extends AzureMachineLearningWorkspacesContext {
  // Operation groups
  operations: operations.Operations;
  workspaces: operations.Workspaces;
  machineLearningCompute: operations.MachineLearningCompute;

  /**
   * Initializes a new instance of the AzureMachineLearningWorkspaces class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure subscription identifier.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AzureMachineLearningWorkspacesOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.workspaces = new operations.Workspaces(this);
    this.machineLearningCompute = new operations.MachineLearningCompute(this);
  }
}

// Operation Specifications

export {
  AzureMachineLearningWorkspaces,
  AzureMachineLearningWorkspacesContext,
  Models as AzureMachineLearningWorkspacesModels,
  Mappers as AzureMachineLearningWorkspacesMappers
};
export * from "./operations";
