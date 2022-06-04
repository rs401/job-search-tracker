/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
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
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
