import React from 'react';
import { request, gql } from 'graphql-request';
export default function Home() {
  const [data, setData] = React.useState({});
  const [keyword, setKeyWord] = React.useState('');
  const query = gql`
    {
      client(id:"1"){
       firstName
       lastName
      }
    }
  `;
  const getData = async () => {
    const d = await request(
      'https://nextjs-graphql-pi.vercel.app/api/graphql',
      query
    );

    setData((prev) => ({ ...prev, client: d.client }));
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
