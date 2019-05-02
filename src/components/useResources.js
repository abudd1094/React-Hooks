import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]) // set up empty state array with hook

  const fetchResource = async (resource) => { // will only run once
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

    setResources(response.data)
  }

  useEffect(() => { // every time our component is rendered or updated, this function is run
    fetchResource(resource) // calling helper function with destructured resource passed in
  }, [resource]); // second argument contains the resource set in App, if it changes the function is re run
  
  return resources // rendering resource list
}

export default useResources;