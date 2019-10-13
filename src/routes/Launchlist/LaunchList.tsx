import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { LaunchDetails } from '../../models/LaunchDetails';

export const LaunchList = () => {
    const query = gql`{launchesPast(limit: 25) {
        id
        mission_name
        links {
          flickr_images
          mission_patch_small
        }
        rocket {
          rocket_name
        }
        launch_date_utc
      }
    }`
    const { loading, error, data } = useQuery(query);
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return (
            <div>
                <p>An error has ocurred</p>
                <p>{error['message']}</p>
            </div>
        )
    }
    return (
  
        data.launchesPast.map( (launch: LaunchDetails) => (
            <section key={launch.id}>
                <img
                    height="50"
                    width="50"
                    src={launch.links.mission_patch_small}
                    alt={`Mission patch of ${launch.mission_name}`}
                />
                <h2>{launch.mission_name}</h2>
                <img
                    height="300"
                    width="300"
                    src={launch.links.flickr_images[0]}
                    alt={`Photo of ${launch.mission_name}`}
                />
            </section>
            )
        )
    )
}