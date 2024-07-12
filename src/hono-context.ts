/* v8 ignore next 40 */
export interface DC {
  name: string;
  url: string;
}

declare module 'hono' {
  interface ContextVariableMap {
    // the clients jwt
    // jwt: JWTInterface;
    // the unparsed JWT
    clientJwtRaw: string;
    dcs: DC[];
    allowAllOrigins: boolean;
    allowedOrigins: string[];
    geoUrl: string;
    ddApiToken: string;
    // the configured app token to call c2fo API's
    appToken: string;
    appEnv: string;
    routeLoggingEnabled: boolean;
    rolloutPercent: number;
    resolvedBy: 'scala' | 'cf' | 'cf-beta';
  }
}

export interface Event {
  // The value of the Cron Trigger that started the ScheduledEvent.
  cron: string;
  // The type of event. This will always return "scheduled".
  type: string;
  // The time the ScheduledEvent was scheduled to be executed in milliseconds since January 1, 1970, UTC.
  // It can be parsed as new Date(event.scheduledTime).
  scheduledTime: number;
}

export interface CronContext {
  // The waitUntil function allows you to extend the lifetime of the event listener, which allows you to perform asynchronous work without the event listener being killed.
  waitUntil: (promise: Promise<unknown>) => void;
}
