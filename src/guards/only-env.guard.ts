import { Environment } from "../../webpack.config";

export const EnvGuard = (env: Environment) => (target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: unknown[]) {
      const url = new URL(location.href)
      if (env === process.env.ENV) {
        originalMethod.apply(this, args);
      } else {
        return;
      }
    };
  
    return descriptor;
  };