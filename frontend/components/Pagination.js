import React from "react";
import PaginationStyles from "./styles/PaginationStyles";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { perPage } from "../config";
import Head from "next/head";
import Link from "next/link";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = count / perPage;
      return (
        <PaginationStyles>
          <Head>
            <title>
              Sick Fits! Page {props.page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: "items",
              query: { page: props.page - 1 }
            }}
          >
            <a className="prev" aria-disabled={props.page <= 1}>
              &larr; Prev
            </a>
          </Link>
          <p>
            Page {props.page} of {pages}
          </p>
          <p>{count} Items Total</p>
          <Link
            prefetch
            href={{
              pathname: "items",
              query: { page: props.page + 1 }
            }}
          >
            <a className="prev" aria-disabled={props.page >= pages}>
              &rarr; Next
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
