export default function handleResponseFromAPI(Mypromise) {
  Mypromise
    .then(() => { console.log('Got a response from the API'); })
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error());
}
