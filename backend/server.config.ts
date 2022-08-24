export const corsOptions = {
 origin: (origin: string | undefined, callback: Function) => {
   const accepted_origins = [origin, process.env.FRONTEND_URL];
   const origin_accepted = accepted_origins.includes(origin);
   callback(
     !origin_accepted && new Error("Request origin not accepted."),
     origin_accepted && origin
   );
 },
 credentials: true,
}

export const API_PREFIX = "/api/v1";