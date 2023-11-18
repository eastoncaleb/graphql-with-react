import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
      dateOfBirth
			formattedDateOfBirth
      placeOfBirth
      books {
        title
        pages
        rating
        yearPublished
        description
      }
    }
  }
`;

function Authors() {
	const { loading, error, data } = useQuery(GET_AUTHORS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return data.authors.map(({ id, name, formattedDateOfBirth, books }) => (
		<div key={id}>
			<h3>{name}</h3>
			<p>Born on: {formattedDateOfBirth}</p>
			{books.map(book => (
				<p key={book.title}>{book.title} - {book.yearPublished}</p>
			))}
		</div>
	));
}

export default Authors;
