export function load() {
  // here data from server to client
}

//here from client form to server;
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    console.log(data);
  }
}