import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT, () => console.log(`Status servidor: ON`))