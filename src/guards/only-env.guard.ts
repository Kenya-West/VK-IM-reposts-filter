import { Mode } from "../../webpack.config";

export const EnvGuard = (env: Mode) => (target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: unknown[]) {
      const url = new URL(location.href)
      if (env === process.env.MODE) {
        originalMethod.apply(this, args);
      } else {
        return;
      }
    };
  
    return descriptor;
  };