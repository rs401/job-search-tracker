/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateApplication: OnCreateApplicationSubscription;
  onUpdateApplication: OnUpdateApplicationSubscription;
  onDeleteApplication: OnDeleteApplicationSubscription;
};

export type CreateApplicationInput = {
  id?: string | null;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export enum Outcome {
  SECOND_INTERVIEW = "SECOND_INTERVIEW",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  GHOSTED = "GHOSTED"
}

export type ModelApplicationConditionInput = {
  company?: ModelStringInput | null;
  position?: ModelStringInput | null;
  description?: ModelStringInput | null;
  jobPostUrl?: ModelStringInput | null;
  response?: ModelBooleanInput | null;
  outcome?: ModelOutcomeInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelApplicationConditionInput | null> | null;
  or?: Array<ModelApplicationConditionInput | null> | null;
  not?: ModelApplicationConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelOutcomeInput = {
  eq?: Outcome | null;
  ne?: Outcome | null;
};

export type Application = {
  __typename: "Application";
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateApplicationInput = {
  id: string;
  company?: string | null;
  position?: string | null;
  description?: string | null;
  jobPostUrl?: string | null;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteApplicationInput = {
  id: string;
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelStringInput | null;
  position?: ModelStringInput | null;
  description?: ModelStringInput | null;
  jobPostUrl?: ModelStringInput | null;
  response?: ModelBooleanInput | null;
  outcome?: ModelOutcomeInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelApplicationFilterInput | null> | null;
  or?: Array<ModelApplicationFilterInput | null> | null;
  not?: ModelApplicationFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelApplicationConnection = {
  __typename: "ModelApplicationConnection";
  items: Array<Application | null>;
  nextToken?: string | null;
};

export type CreateApplicationMutation = {
  __typename: "Application";
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateApplicationMutation = {
  __typename: "Application";
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteApplicationMutation = {
  __typename: "Application";
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
};

export type GetApplicationQuery = {
  __typename: "Application";
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
};

export type ListApplicationsQuery = {
  __typename: "ModelApplicationConnection";
  items: Array<{
    __typename: "Application";
    id: string;
    company: string;
    position: string;
    description: string;
    jobPostUrl: string;
    response?: boolean | null;
    outcome?: Outcome | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateApplicationSubscription = {
  __typename: "Application";
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateApplicationSubscription = {
  __typename: "Application";
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteApplicationSubscription = {
  __typename: "Application";
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateApplication(
    input: CreateApplicationInput,
    condition?: ModelApplicationConditionInput
  ): Promise<CreateApplicationMutation> {
    const statement = `mutation CreateApplication($input: CreateApplicationInput!, $condition: ModelApplicationConditionInput) {
        createApplication(input: $input, condition: $condition) {
          __typename
          id
          company
          position
          description
          jobPostUrl
          response
          outcome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateApplicationMutation>response.data.createApplication;
  }
  async UpdateApplication(
    input: UpdateApplicationInput,
    condition?: ModelApplicationConditionInput
  ): Promise<UpdateApplicationMutation> {
    const statement = `mutation UpdateApplication($input: UpdateApplicationInput!, $condition: ModelApplicationConditionInput) {
        updateApplication(input: $input, condition: $condition) {
          __typename
          id
          company
          position
          description
          jobPostUrl
          response
          outcome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateApplicationMutation>response.data.updateApplication;
  }
  async DeleteApplication(
    input: DeleteApplicationInput,
    condition?: ModelApplicationConditionInput
  ): Promise<DeleteApplicationMutation> {
    const statement = `mutation DeleteApplication($input: DeleteApplicationInput!, $condition: ModelApplicationConditionInput) {
        deleteApplication(input: $input, condition: $condition) {
          __typename
          id
          company
          position
          description
          jobPostUrl
          response
          outcome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteApplicationMutation>response.data.deleteApplication;
  }
  async GetApplication(id: string): Promise<GetApplicationQuery> {
    const statement = `query GetApplication($id: ID!) {
        getApplication(id: $id) {
          __typename
          id
          company
          position
          description
          jobPostUrl
          response
          outcome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetApplicationQuery>response.data.getApplication;
  }
  async ListApplications(
    filter?: ModelApplicationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListApplicationsQuery> {
    const statement = `query ListApplications($filter: ModelApplicationFilterInput, $limit: Int, $nextToken: String) {
        listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            position
            description
            jobPostUrl
            response
            outcome
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListApplicationsQuery>response.data.listApplications;
  }
  OnCreateApplicationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateApplication">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApplication {
        onCreateApplication {
          __typename
          id
          company
          position
          description
          jobPostUrl
          response
          outcome
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateApplication">>
  >;

  OnUpdateApplicationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateApplication">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApplication {
        onUpdateApplication {
          __typename
          id
          company
          position
          description
          jobPostUrl
          response
          outcome
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateApplication">>
  >;

  OnDeleteApplicationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteApplication">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApplication {
        onDeleteApplication {
          __typename
          id
          company
          position
          description
          jobPostUrl
          response
          outcome
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteApplication">>
  >;
}
