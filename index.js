import { app, port } from './src/server.js';
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
