/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApplication = /* GraphQL */ `
  mutation CreateApplication(
    $input: CreateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    createApplication(input: $input, condition: $condition) {
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
  }
`;
export const updateApplication = /* GraphQL */ `
  mutation UpdateApplication(
    $input: UpdateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    updateApplication(input: $input, condition: $condition) {
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
  }
`;
export const deleteApplication = /* GraphQL */ `
  mutation DeleteApplication(
    $input: DeleteApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    deleteApplication(input: $input, condition: $condition) {
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
  }
`;
