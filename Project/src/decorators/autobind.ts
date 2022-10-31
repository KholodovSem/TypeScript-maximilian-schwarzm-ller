//* Autobinding
export function BindThis(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const modifyFn = originalFn.bind(this);
      return modifyFn;
    },
  };
  return adjDescriptor;
}
